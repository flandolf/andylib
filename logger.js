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
    log(text, color) {
        switch (color) {
            case 'red':
                console.log(`[LOG] | ${moment().format('hh:mm:ss')} | ${text} |`.red);
                break;
            case 'green':
                console.log(`[LOG] | ${moment().format('hh:mm:ss')} | ${text} |`.green);
                break;
            case 'yellow':
                console.log(`[LOG] | ${moment().format('hh:mm:ss')} | ${text} |`.yellow);
                break;
            case 'blue':
                console.log(`[LOG] | ${moment().format('hh:mm:ss')} | ${text} |`.blue);
                break;
            default:
                console.log(`[LOG] | ${moment().format('hh:mm:ss')} | ${text} |`.white);
                break;
        }

}
 }
module.exports = logger;