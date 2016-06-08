'use strict';

var test = require('tape');
var hasExpired = require('../index.js');

test('Previous date test', function(assert) {
    assert.ok(hasExpired('01/01/1970'), 'This date should have expired.');
    assert.ok(hasExpired('06/12/2000'), 'This date should have expired.');
    assert.ok(hasExpired('6/5/02'), 'This date should have expired. (short m/d/y)');
    assert.ok(hasExpired('8/21/94'), 'This date should have expired. (short m/d/y)');
    assert.end();
});

test('Current date test', function(assert) {
    var now = new Date();
    assert.ok(
        hasExpired(
            formatDate(now.getFullYear(), now.getMonth(), now.getDate())
        ),'Current date should be expired (because no seconds/millis).'
    );
    assert.end();
});

test('Future date test', function(assert) {
    assert.notOk(hasExpired('01/01/2020'), 'Future date shouldnt have expired.');
    assert.notOk(hasExpired('06/12/2040'), 'Future date shouldnt have expired.');
    assert.end();
});


test('Format date test', function(assert) {
    var yesterday = new Date(Date.now() - 60 * 60 * 24 * 1000);
    var day = yesterday.getDate();
    var month = yesterday.getMonth();
    var year = yesterday.getFullYear();


    assert.ok(
        hasExpired(year + '/' +  month + '/' + day, 'YMD')
    , 'Yesterday should be expired.');
    assert.ok(
        hasExpired(year + '/' +  day + '/' + month, 'YDM')
    , 'Yesterday should be expired.');
    assert.ok(
        hasExpired(day + '/' +  month + '/' + year, 'DMY')
    , 'Yesterday should be expired.');
    assert.ok(
        hasExpired(month + '/' +  day + '/' + year, 'MDY')
    , 'Yesterday should be expired.');

    assert.end();
});

function formatDate(year, month, day) {
    return (month + 1) + '/' + day + '/' + year;
}