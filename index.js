const colors = require('colors');
/**
 * `hello()` logs "Hello World" to the console
 */
function hello() {
    log("Hello World", "info");
}
/* A function that takes in a url, headers, and a verbose flag. It returns a promise that will resolve
if the request is successful and reject if it is not. */
function get(url, headers = {}, verbose = false) {
    return new Promise(function (resolve, reject) {
        var request = require('request');
        // Configure the request
        var options = {
            url: url,
            method: 'GET',
            headers: headers,
            gzip: true
        };
        if (verbose) {
            log("Requesting: " + url, "info");
            log("Headers: " + JSON.stringify(headers), "info");

        }

        // Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            }
            else {
                reject(error);
            }
        }
        );

    });
}
function post(url, headers = {}, body = "", verbose = false) {
    body = body.toString()
    return new Promise(function (resolve, reject) {
        var request = require('request');
        if (verbose) {
            log("Posting: " + url, "info");
            log("Headers: " + JSON.stringify(headers), "info");
            log("Body: " + JSON.stringify(body), "info");

        }
        request.post({
            url: url,
            headers: headers,
            body: body
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            }
            else {
                reject(error);
            }
        })

    });
}
/**
 * It logs a message to the console with a timestamp and a type
 * @param msg - The message to be logged
 * @param type - The type of log message. This can be "error", "info", or "success".
 */
function log(msg, type = 'success') {

    var time = new Date().toLocaleTimeString().replace('AM', '').replace('PM', '');
    if (type == "error") {
        console.log(("[ERROR] " + time + "| " + msg).red);
    } else if (type == "info") {
        console.log(("[INFO] " + time + "| " + msg).yellow);
    }
    else if (type == "success") {
        console.log(("[LOG] " + time + "| " + msg).green);
    }
}

module.exports = {
    log,
    get,
    hello,
    post
}
