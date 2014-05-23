/*
 * zed-gfm-preview
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var ui = require('zed/ui');
var http = require('zed/http');
var preview = require('zed/preview');
var session = require('zed/session');
var config = require('zed/config');

/**
 * GitHub Markdown Preview.
 * 
 */
module.exports = function (info) {

    var api = 'https://api.github.com/markdown/raw';
    var stylesheet = 'https://raw.githubusercontent.com/sindresorhus/github-markdown-css/gh-pages/github-markdown.css';

    Promise.all([
        config.getPreference('githubToken'),
        session.getText(info.path)
    ])
    .then(function onInit (vals) {
        var token = vals[0];
        var content = vals[1];

        return http.post(api, {
            data: content,
            headers: {'Content-Type': 'text/plain'}
        });
    })
    .then(function onResponse (data) {
        console.log('response');
        console.log(data[2]['X-RateLimit-Remaining']);
    });
    
    
    /**
     * Creates the HTML template with the embedded styles.
     * 
     * @param {String} data The response body from the GitHub API.
     * 
     */
    function template (data) {
        var html = '<link rel="stylesheet" href="' + stylesheet + '">' +
            '<style>'+
                '.markdown-body {' +
                    'min-width: 200px;' +
                    'max-width: 790px;' +
                    'margin: 0 auto;' +
                    'padding: 30px;' +
                '}' +
            '</style>' +
            '<article class="markdown-body">' +
                 data +
            '</div>';
        
        return html;
    }
    
    
    /**
     * Passing the content from the current file to the
     * GitHub Markdown API and present this in a preview split.
     * 
     * @param {String} content The content of the current file.
     *
     */
    /*function onText (content) {
        .then(
            function onResponse (data) {
                var html = template(data);
        
                preview.showPreview(html);
            },
            function onError (code) {
                ui.prompt('Autsch! GitHub says: ' + code);
            }
        );
    }*/

    // Fetch the content from the current editor.
    //session.getText(info.path).then(onText);
};