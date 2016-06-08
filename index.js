'use strict';

module.exports = function(date, format) {
    format = (format || 'MDY').toLowerCase().split('');

    var dateComponents = date.split('/');
    var day;
    var month;
    var year;

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

    var targetDate = new Date(year, month, day);
    var now = Date.now();

    return now > targetDate;
};