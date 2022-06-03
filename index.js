const colors = require('colors');
function hello() {
    log("Hello World", "info");
}
function get(url, headers={}, verbose=false) {
    return new Promise(function (resolve, reject) {
        var request = require('request');
        // Configure the request
        var options = {
            url: url,
            method: 'GET',
            headers: headers,
            gzip: true
        };
        if(verbose){
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
function log(msg, type) {

    var time = new Date().toLocaleTimeString().replace('AM', '').replace('PM', '');
    if (type == "error") {
        console.log(("[ERROR] " + time + "| " + msg).red);
    } else if (type == "info") {
        console.log(("[INFO] " + time + "| " + msg).yellow);
    }
    else {
        console.log(("[ERROR] " + time + "| " + msg).green);
    }


}
module.exports = {
    log,
    get,
    hello

}
