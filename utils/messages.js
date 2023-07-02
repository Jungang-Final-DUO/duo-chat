const moment = require('moment');

function formatMessage(username, room, myProfile, text, matchingStatus){
    return {
        username,
        room,
        myProfile,
        text,
        matchingStatus,
        time: moment().format('MM.DD HH:mm')
    }
}

module.exports = formatMessage;
