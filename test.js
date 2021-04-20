import test from 'ava';
import dateTime from './index.js';

test('main', t => {
	t.regex(dateTime(), /^[\d-]+ [\d:]+$/);
	t.regex(dateTime({date: new Date()}), /^[\d-]+ [\d:]+$/);
});

test('showTimeZone option', t => {
	t.regex(dateTime({showTimeZone: true}), /^[\d-]+ [\d:]+ UTC[-+][\d:]+$/);

	t.regex(dateTime({
		local: false,
		showTimeZone: true
	}), /^[\d-]+ [\d:]+ UTC$/);
});

test('showMilliseconds option', t => {
	t.regex(dateTime({
		local: false,
		showMilliseconds: true
	}), /^[\d-]+ [\d:]+ \d+ms$/);

	t.regex(dateTime({
		local: false,
		showMilliseconds: true,
		showTimeZone: true
	}), /^[\d-]+ [\d:]+ \d+ms UTC$/);
});
