const moment = require('moment');

function formatMessage(username, room, text){
    return {
        username,
        room,
        text,
        time: moment().format('MM.dd HH:mm')
    }
}

module.exports = formatMessage;
