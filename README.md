# sha1-file [![Build Status](https://travis-ci.org/roryrjb/sha1-file.svg?branch=master)](https://travis-ci.org/roryrjb/sha1-file) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

> Simply return an `sha1` sum of a given file. If using async version (by including callback), it will stream; successfully tested on files 4 GB+.

### Installation

```
$ npm install sha1-file
```

__Test:__

```
$ npm test
```

### API

__sha1File(path, [callback])__

```javascript
var sha1File = require('sha1-file')

// sync (no callback)

sha1File('./path/to/a_file') // 'c8a2e2125f94492082bc484044edb4dc837f83b'

// async/streamed (if using callback)

sha1File('./path/to/a_file', function (error, sum) {
  if (error) return console.log(error)
  console.log(sum) // 'c8a2e2125f94492082bc484044edb4dc837f83b'
})
```

### License

MIT
