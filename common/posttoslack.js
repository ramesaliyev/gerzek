// Web hook url.
var webhookUrl = "https://hooks.slack.com/services/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";

// Require modules.
var request = require('request');

module.exports = function(postBody){
    request({
        method  : "POST",
        url     : webhookUrl,
        json    : true,
        body    : postBody
    });
};