'use strict';
var assert = require('assert');
var dateTime = require('./index');

it('should print out pretty datetime', function () {
	assert(/UTC$/.test(dateTime()));
});
