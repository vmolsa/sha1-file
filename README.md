# sha1-file [![Build Status](https://travis-ci.org/roryrjb/sha1-file.svg?branch=master)](https://travis-ci.org/roryrjb/sha1-file)

> Simply return an `sha1` sum of a given file.

### Installation

```
$ npm install sha1-file
```

__Test:__

```
$ npm test
```

### API

_Sync:_

__sha1File(path)__

```javascript
var sha1File = require('sha1-file');

sha1File('path/to/a_file'); // '18e904aae79b5642ed7975c0a0074936'
```

_Async:_

__sha1File(path, callback, [strict])__

If _strict_ is `true` and there is an error it will `throw` it, otherwise it will pass an error string through the callback.

```javascript
sha1File.async('./README.md', function (data) {
  console.log(data);
});

sha1File.async('./README.md', function (data) {
  console.log(data);
}, true);

// errors

// non-strict: will pass through an error to `data`
sha1File.async('./null', function (data) {
  console.log(data);
});

// strict: will throw an error
sha1File.async('./null', function (data) {
  console.log(data);
}, true);
```

### LICENSE

MIT
