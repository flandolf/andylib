const colors = require('colors');
/**
 * `hello()` logs "Hello World" to the console
 */
function hello() {
    log("Hello World", "info");
}

/**
 * It takes a URL, a set of headers, and a verbose flag, and returns a promise that resolves to the
 * body of the response.
 * @param url - The URL to request
 * @param [headers] - This is a JSON object that contains the headers that you want to send with the
 * request.
 * @param [verbose=false] - If true, will log the request and headers to the console.
 * @returns A promise
 */
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
/**
 * It takes a URL, headers, and body, and returns a promise that resolves to the response body
 * @param url - The URL to post to
 * @param [headers] - This is a JSON object that contains the headers for the request.
 * @param [body] - The body of the request.
 * @param [verbose=false] - If true, will log the request to the console.
 * @returns A promise
 */
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
    time.replace('^[ \t]+')
    if (type == "error") {
        console.log(("[ERROR] " + time + " | " + msg).red);
    } else if (type == "info") {
        console.log(("[INFO] " + time + " | " + msg).yellow);
    }
    else if (type == "success") {
        console.log(("[LOG] " + time + " | " + msg).green);
    }
}
function logadv(msg, color = 'green', text = 'LOG') {
    var time = new Date().toLocaleTimeString();
    switch (color) {
        case 'green':
            console.log(("[" + text + "] " + time + " | " + msg).green);
            break;
        case 'red':
            console.log(("[" + text + "] " + time + " | " + msg).red);
            break;
        case 'yellow':
            console.log(("[" + text + "] " + time + " | " + msg).yellow);
            break;
        case 'blue':
            console.log(("[" + text + "] " + time + " | " + msg).blue);
            break;
        case 'cyan':
            console.log(("[" + text + "] " + time + " | " + msg).cyan);
            break;
    }
}
function pi(digits) {
    let i = 1n;
    let x = 3n * (10n ** 10020n);
    let pi = x;
    while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
    }
    var final = pi / (10n ** 20n);
    final = final.toString()
    // cut off final to the digits
    final = final.substring(0, digits);
    return final
}
function typew(text, speed=1) {
    var i = 0;
    var timer = setInterval(function () {
        process.stdout.write(text[i]);
        i++;
        if (i >= text.length) {
            clearInterval(timer);
        } 
    },  speed);
}

module.exports = {
    log,
    get,
    hello,
    post,
    logadv,
    pi,
    typew
}
