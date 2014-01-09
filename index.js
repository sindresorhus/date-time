'use strict';
module.exports = function () {
	return (new Date()).toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' UTC';
};
