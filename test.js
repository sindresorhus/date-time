import test from 'ava';
import m from '.';

const date = new Date(1989, 2, 4, 10);

test(t => {
	t.regex(m(), /^[\d-]+ [\d:]+$/);
	t.regex(m({date: new Date()}), /^[\d-]+ [\d:]+$/);
	t.is(m({date}), '1989-03-04 10:00:00');
	t.regex(m({showTimeZone: true}), /^[\d-]+ [\d:]+ UTC[-+][\d:]+$/);
	t.is(m({showTimeZone: true, date}), '1989-03-04 10:00:00 UTC+7');
	t.regex(m({local: false, showTimeZone: true}), /^[\d-]+ [\d:]+ UTC$/);
	t.is(m({local: false, date}), '1989-03-04 03:00:00');
	t.is(m({local: false, showTimeZone: true, date}), '1989-03-04 03:00:00 UTC');
});
