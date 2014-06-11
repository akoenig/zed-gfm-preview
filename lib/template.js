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

var STYLESHEET = 'https://raw.githubusercontent.com/akoenig/github-markdown-css/gh-pages/github-markdown.css';

/**
* Creates the HTML template with the embedded styles.
* 
* @param {String} data The response body from the GitHub API.
* 
*/
exports.render = function render (data) {
    var html = '<link rel="stylesheet" href="' + STYLESHEET + '">' +
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
};