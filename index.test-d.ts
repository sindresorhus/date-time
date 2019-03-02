import {expectType} from 'tsd-check';
import dateTime from '.';

expectType<string>(dateTime());
expectType<string>(dateTime({date: new Date(1989, 2, 4, 10)}));
expectType<string>(dateTime({showTimeZone: true}));
expectType<string>(dateTime({local: false}));
expectType<string>(dateTime({local: false, showTimeZone: true}));
expectType<string>(dateTime({showMilliseconds: true}));
