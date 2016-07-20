import test from 'ava';
import m from './';

test(t => {
	t.regex(m(), /^[\d-]+ [\d:]+ UTC$/);
	t.regex(m(new Date(), {local: true}), /^[\d-]+ [\d:]+ UTC[-+][\d:]+$/);
});
