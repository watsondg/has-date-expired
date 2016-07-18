has-date-expired
===

Sane way to know if a date has expired or not.

## Install

```
npm install watsondg/has-date-expired -S
```

## Usage

```
var hasExpired = require('has-date-expired');

var season = hasExpired('06/20/2016') ? 'summer' : 'spring';
var isNoon = hasExpired('06/20/2016 12:00:00');
```

## Methods

### hasExpired(date[, format])

Return true if the input date has expired, false otherwise.
Calculated with `Date.now()`.
* `date` (`DATE[ TIME]`) - The target date. Date components are separated by slashes. Time components (optional) are separated by colons. Shorthands work too (i.e. year can be on 2 or 4 digits).
* `format` - (OPTIONAL) - 3 letters, in any order, 'YMD' to represent the order of **Y**ear, **M**onth and **D**ay. Defaults to MDY. Note that time format is always 0-23.

## License
MIT.