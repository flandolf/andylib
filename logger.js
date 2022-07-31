const moment = require('moment');
class logger {

    info(text) {
        console.log(`[INFO] | ${moment().format('hh:mm:ss')} | ${text} |`.green);
    }
    warn(text) {
        console.log(`[WARN] | ${moment().format('hh:mm:ss')} | ${text} |`.yellow);
    }
    error(text) {
        console.log(`[ERROR] | ${moment().format('hh:mm:ss')} | ${text} |`.red);
    }
    debug(text) {
        console.log(`[DEBUG] | ${moment().format('hh:mm:ss')} | ${text} |`.blue);
    }

}
module.exports = logger;