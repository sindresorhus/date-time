'use strict';
const timeZone = require('time-zone');

module.exports = options => {
	options = options || {};

	let date = options.date || new Date();

	if (options.local) {
		// Offset the date so it will return the correct value when getting the ISO string
		date = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
	}

	return date
		.toISOString()
		.replace(/T/, ' ')
		.replace(/\..+/, ' UTC' + (options.local ? timeZone(date) : ''));
};
