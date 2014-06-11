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
var session = require('zed/session');
var config = require('zed/config');
var preview = require('zed/preview');

var github = require('./lib/github');
var template = require('./lib/template');

/**
 * GitHub Markdown Preview.
 * 
 */
module.exports = function (info) {

    var QUOTA_WARNING = 10;

    Promise.all([
        session.getText(info.path),
        config.getPreference('githubToken'),
        template.create()
    ])
    .then(
        function onInit (values) {
            var content = values[0];
            var token = values[1];
            var tpl = values[2];

            github.markdown(content, token).then(
                function onResponse (data) {

                    if (data.quota <= QUOTA_WARNING) {
                        ui.prompt('You\'re about to hit GitHub\'s quota limit (' + data.quota + ' request(s) left).');
                    }
        
                    data.html = tpl.render(data.html);
        
                    preview.showPreview(data.html);
                },
                function onFail (err) {
                    ui.prompt(err.toString());
                }    
            );
        }
    );
};