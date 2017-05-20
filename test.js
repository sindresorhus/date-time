import test from 'ava';
import m from '.';

test(t => {
	t.regex(m(), /^[\d-]+ [\d:]+$/);
	t.regex(m({date: new Date()}), /^[\d-]+ [\d:]+$/);
	t.regex(m({showTimeZone: true}), /^[\d-]+ [\d:]+ UTC[-+][\d:]+$/);
	t.regex(m({local: false, showTimeZone: true}), /^[\d-]+ [\d:]+ UTC$/);
});
