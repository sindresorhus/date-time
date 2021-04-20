import timeZone from 'time-zone';

export default function dateTime(options = {}) {
	let {
		date = new Date(),
		local = true,
		showTimeZone = false,
		showMilliseconds = false
	} = options;

	if (local) {
		// Offset the date so it will return the correct value when getting the ISO string.
		date = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
	}

	let end = '';

	if (showTimeZone) {
		end = ' UTC' + (local ? timeZone(date) : '');
	}

	if (showMilliseconds && date.getUTCMilliseconds() > 0) {
		end = ` ${date.getUTCMilliseconds()}ms${end}`;
	}

	return date
		.toISOString()
		.replace(/T/, ' ')
		.replace(/\..+/, end);
}
