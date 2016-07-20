import test from 'ava';
import m from './';

test(t => {
	t.regex(m(), /^[\d-]+ [\d:]+ UTC$/);
});
