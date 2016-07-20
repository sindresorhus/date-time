# date-time [![Build Status](https://travis-ci.org/sindresorhus/date-time.svg?branch=master)](https://travis-ci.org/sindresorhus/date-time)

> Pretty UTC datetime: `2014-01-09 06:46:01 UTC`


## Install

```
$ npm install --save date-time
```


## Usage

```js
const dateTime = require('date-time');

dateTime();
//=> '2016-07-20 10:27:33 UTC'

dateTime(new Date(1989, 2, 4, 10));
//=> '1989-03-04 09:00:00 UTC'
```


## API

### dateTime([date])

#### date

Type: `Date`<br>
Default: `new Date()`


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
