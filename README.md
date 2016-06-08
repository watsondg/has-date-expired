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
```

## Methods

### hasExpired(date[, format])

Return true if the input date has expired, false otherwise.
Calculated with `Date.now()`.
* `date` - The target date. Date components are separated by slashes. Day and Month can be on 1 or 2 characters, year on 2 or 4.
* `format` - (OPTIONAL) - 3 letters, in any order, 'YMD' to represent the order of **Y**ear, **M**onth and **D**ay. Defaults to MDY.

## License
MIT.