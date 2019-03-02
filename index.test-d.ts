import {expectType} from 'tsd-check';
import DateTime from ".";

expectType<string>(DateTime());

expectType<string>(DateTime({date: new Date(1989, 2, 4, 10)}));

expectType<string>(DateTime({showTimeZone: true}));

expectType<string>(DateTime({local: false}));

expectType<string>(DateTime({local: false, showTimeZone: true}));

expectType<string>(DateTime({showMilliseconds: true}));
