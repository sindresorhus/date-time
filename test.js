import test from 'ava';
import m from '.';

test('main', t => {
	t.regex(m(), /^[\d-]+ [\d:]+$/);
	t.regex(m({date: new Date()}), /^[\d-]+ [\d:]+$/);
});

test('showTimeZone option', t => {
	t.regex(m({showTimeZone: true}), /^[\d-]+ [\d:]+ UTC[-+][\d:]+$/);

	t.regex(m({
		local: false,
		showTimeZone: true
	}), /^[\d-]+ [\d:]+ UTC$/);
});

test('showMilliseconds option', t => {
	t.regex(m({
		local: false,
		showMilliseconds: true
	}), /^[\d-]+ [\d:]+ \d+ms$/);

	t.regex(m({
		local: false,
		showMilliseconds: true,
		showTimeZone: true
	}), /^[\d-]+ [\d:]+ \d+ms UTC$/);
});
