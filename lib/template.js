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

var http = require('zed/http')

/**
 * The template.
 *
 */
function Template () {
    this.$$stylesheet = 'https://raw.githubusercontent.com/akoenig/github-markdown-css/gh-pages/github-markdown.css';
    this.$$selectors = '';
}

/**
 * Creates the HTML template with the embedded styles.
 * 
 * @param {String} data The response body from the GitHub API.
 * 
 */
Template.prototype.render = function render (data) {
    var html = '<style>' +
            'body {' +
                'min-width:100px !important;' +
            '}\n' +
            '.markdown-body {' +
                'min-width: 200px;' +
                'max-width: 790px;' +
                'margin: 0 auto;' +
                'padding: 30px;' +
            '}' +
            this.$$selectors +
        '</style>' +
        '<article class="markdown-body">' +
             data +
        '</div>';
    
    return html;
};

/**
 * Loads the GitHub stylesheet.
 * 
 */
Template.prototype.load = function load () {
    var self = this;

    return new Promise(function thePromise (resolve, reject) {

        function onSuccess (response) {
            self.$$selectors = response[0];
            return resolve(self);
        }
        
        function onFailure (status) {
            return reject(new Error('Unable to load template stylesheet'));
        }

        http.get(self.$$stylesheet).then(onSuccess, onFailure);
    });
};

/**
 * Creates a new template.
 *
 */
exports.create = function create () {
    var template = new Template();

    return template.load();
};