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

it('should print out UTC datetime of August 2, 1994', function(){
	assert(/UTC$/.test(dateTime(new Date(1994, 7 ,3))));
	console.log(dateTime(new Date(1994, 7, 3)));
});

it('should print out local datetime of August 2, 1994', function(){
	assert(/(UTC[\+\-][1-9][0-9]?(:30)?$)|(UTC[\+\-]0$)/.test(dateTime(new Date(1994, 7, 3), 'local')));
	console.log(dateTime(new Date(1994, 7, 3), 'local'));
});
