const moment = require('moment');

function formatMessage(username, room, text){
    return {
        username,
        room,
        text,
        time: moment().format('MM.DD HH:mm')
    }
}

module.exports = formatMessage;
