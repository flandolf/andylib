require('colors')
const logger = require('./logger');
const time = require('./time');
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
            logger.info("Requesting: " + url);
            logger.info("Headers: " + JSON.stringify(headers));

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
function post(url, headers = {}, body = {}, verbose = false) {
    body = body.toString()
    return new Promise(function (resolve, reject) {
        var request = require('request');
        if (verbose) {
            logger.info("Posting: " + url);
            logger.info("Headers: " + JSON.stringify(headers));
            logger.info("Body: " + JSON.stringify(body));
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

function pi(digits) {
    let i = 1n;
    let x = 3n * (BigInt(digits)  ** 10020n);
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

/**
 * It prints out the text in the console.
 * @param text - The text you want to type out.
 * @param [speed=1] - The speed at which the text is typed. The default is 1.
 */
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
    get,
    post,
    pi,
    typew,
    logger,
    time
}
