export interface Options {
	/**
	Custom date.

	@default new Date()
	*/
	readonly date?: Date;

	/**
	Show the date in the local time zone.

	@default false
	*/
	readonly local?: boolean;

	/**
	Show the UTC time zone postfix.

	@default false
	*/
	readonly showTimeZone?: boolean;

	/**
	Show the milliseconds in the date if any.

	@default false
	*/
	readonly showMilliseconds?: boolean;
}

/**
Pretty datetime: `2014-01-09 06:46:01`.

@example
```
import dateTime from 'date-time';

dateTime();
//=> '2017-05-20 17:07:05'

dateTime({date: new Date(1989, 2, 4, 10)});
//=> '1989-03-04 09:00:00'

dateTime({showTimeZone: true});
//=> '2017-05-20 17:07:05 UTC+7'

dateTime({local: false});
//=> '2017-05-20 10:07:05'

dateTime({local: false, showTimeZone: true});
//=> '2017-05-20 10:07:05 UTC'

dateTime({showMilliseconds: true});
//=> '2017-05-20 17:07:05 6ms'
```
*/
export default function dateTime(options?: Options): string;
