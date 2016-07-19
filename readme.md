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
//=> '2016-07-19 12:07:08 UTC'

dateTime('local');
//=> '2016-07-19 12:07:08 UTC+5:30'

dateTime(new Date(2050, 1, 2));
//=> '2050-02-01 18:30:00 UTC'

dateTime(new Date(2050, 1, 2), 'local');
//=> '2050-02-01 18:30:00 UTC+5:30'
```


## API

### dateTime([date],'local'])

#### date

Type: `date`  
Default: `new Date()`

#### date

Type: `string`  
Default: null


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
