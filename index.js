'use strict';
module.exports = function(date, local) {
	local = local ? local : date ? date instanceof Date ? null : date : null;
	date = date ? date instanceof Date ? date : new Date() : new Date();
	var prettyTimeZone = ' UTC';
	if (local) {
		prettyTimeZone = (new Date().toString().match(/GMT\S*/).toString().slice(0, 6) + ":" + new Date().toString().match(/GMT\S*/).toString().slice(6)).replace(/GMT/, "");
		prettyTimeZone = prettyTimeZone.charAt(1) !== "0" ? prettyTimeZone : prettyTimeZone.slice(0, 1) + prettyTimeZone.slice(2);
		prettyTimeZone = prettyTimeZone.split(":")[1] === "00" ? prettyTimeZone.split(":")[0] : prettyTimeZone;
		prettyTimeZone = ' UTC'+ prettyTimeZone;
	}
	return date.toISOString().replace(/T/, ' ').replace(/\..+/, prettyTimeZone);
};
