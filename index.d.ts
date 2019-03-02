// Type definitions for date-time 2.1
// Definitions by: Adam Zerella <https://github.com/adamzerella>

interface DateTimeOptions {
	/**
	 * Custom date.
	 *
	 * @default Date;
	 */
	date?: Date;
	/**
	 * Show the date in the local time zone.
	 *
	 * @default false;
	 */
	local?: boolean;
	/**
	 * Show the UTC time zone postfix.
	 *
	 * @default false;
	 */
	showTimeZone?: boolean;
	/**
	 * Show the milliseconds in the date if any.
	 *
	 * @default false;
	 */
	showMilliseconds?: boolean;
}

/**
 * Pretty datetime: 2014-01-09 06:46:01
 *
 * @param options - The options to configure date-time
 * @returns Date string
 */
export default function(options?: DateTimeOptions): string;
