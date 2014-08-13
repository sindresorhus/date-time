'use strict';
var assert = require('assert');
var dateTime = require('./');

it('should print out pretty datetime', function () {
	assert(/UTC$/.test(dateTime()));
});
