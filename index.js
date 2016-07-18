'use strict';

module.exports = function(date, format) {
    format = (format || 'MDY').toLowerCase().split('');

    var inputs = date.split(' ');
    var dateComponents = inputs[0].split('/');
    var day;
    var month;
    var year;
    var hours;
    var minutes;
    var seconds;
    var timeComponents = inputs[1] && inputs[1].split(':');

    dateComponents.forEach(function(component, index) {
        switch(format[index]) {
            case 'd':
                day = parseInt(component, 10);
                break;

            case 'm':
                month = parseInt(component - 1, 10);
                break;

            case 'y':
                year = parseInt(component, 10);
                break;
        }
    });

    if (timeComponents && timeComponents.length) {
        hours = timeComponents[0];
        minutes = timeComponents[1];
        seconds = timeComponents[2];
    }

    var targetDate = new Date(year, month, day);
    if (hours !== undefined) targetDate.setUTCHours(hours);
    if (minutes !== undefined) targetDate.setUTCMinutes(minutes);
    if (seconds !== undefined) targetDate.setUTCSeconds(seconds);
    var now = Date.now();

    return now > targetDate;
};