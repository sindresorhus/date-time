'use strict';
var assert = require('assert');
var dateTime = require('./');

it('should print out UTC datetime', function () {
	assert(/UTC$/.test(dateTime()));
	console.log(dateTime());
});

it('should print out local datetime', function(){
	assert(/(UTC[\+\-][1-9][0-9]?(:30)?$)|(UTC[\+\-]0$)/.test(dateTime('local')));
	console.log(dateTime(true));
});

it('should print out UTC datetime of passed date', function(){
	assert(/UTC$/.test(dateTime(new Date(2050, 1, 2))));
	console.log(dateTime(new Date(2050, 1, 2)));
});

it('should print out local datetime of passed date', function(){
	assert(/(UTC[\+\-][1-9][0-9]?(:30)?$)|(UTC[\+\-]0$)/.test(dateTime(new Date(2050, 1, 2), 'local')));
	console.log(dateTime(new Date(2050, 1, 2), 'local'));
});
