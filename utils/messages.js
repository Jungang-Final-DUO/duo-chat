const moment = require('moment');

function formatMessage(username, room, text, matchingStatus, matchingNo){
    return {
        username,
        room,
        text,
        matchingStatus,
        matchingNo,
        time: moment().format('MM.DD HH:mm')
    }
}

module.exports = formatMessage;
