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

var http = require('zed/http');

var ENDPOINTS = {
    MARKDOWN: 'https://api.github.com/markdown/raw'
};

/**
 * DOCME
 *
 * markdown().then(function (html, quota))
 * 
 */
exports.markdown = function markdown (content, token) {
    var uri = ENDPOINTS.MARKDOWN;

    if (token) {
        uri = uri + '?access_token=' + token;
    }

    return new Promise(function thePromise (resolve, reject) {
        
        function onSuccess (data) {
            var response = {
                html: data[0],
                quota: data[2]['X-RateLimit-Remaining']
            };

            return resolve(response);
        }
        
        function onFailure (status) {
            return reject(new Error('Something went wrong! GitHub answers with a HTTP status code: ' + status));
        }
        
        http.post(uri, {
            data: content,
            headers: {'Content-Type': 'text/plain'}
        }).then(onSuccess, onFailure);
    });
};