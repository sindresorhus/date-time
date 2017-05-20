'use strict';
const timeZone = require('time-zone');

module.exports = options => {
	options = Object.assign({
		date: new Date(),
		local: true,
		showTimeZone: false
	}, options);

	let date = options.date;

	if (options.local) {
		// Offset the date so it will return the correct value when getting the ISO string
		date = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
	}

	const utcSymbol = ' UTC' + (options.local ? timeZone(date) : '');

	return date
		.toISOString()
		.replace(/T/, ' ')
		.replace(/\..+/, options.showTimeZone ? utcSymbol : '');
};
