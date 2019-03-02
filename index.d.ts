export interface Options {
	/**
	 * Custom date.
	 *
	 * @default new Date()
	 */
	date?: Date;

	/**
	 * Show the date in the local time zone.
	 *
	 * @default false
	 */
	local?: boolean;

	/**
	 * Show the UTC time zone postfix.
	 *
	 * @default false
	 */
	showTimeZone?: boolean;

	/**
	 * Show the milliseconds in the date if any.
	 *
	 * @default false
	 */
	showMilliseconds?: boolean;
}

/**
 * Pretty datetime: `2014-01-09 06:46:01`
 */
export default function dateTime(options?: Options): string;
