'use strict';

var sha1 = require('./index');

console.log('sha1 (1) ' + sha1('./README.md'));

sha1.async('./README.md', function (data) {
  console.log('sha1 (2) ' + data);
});

sha1.async('./README.md', function (data) {
  console.log('sha1 (3) ' + data);
}, true);

// errors

// non-strict: will pass through an error to `data`
sha1.async('./null', function (data) {
  console.log('sha1 (4) ' + data);
});

// strict: will throw an error
sha1.async('./null', function (data) {
  console.log('sha1 (5) ' + data);
}, true);

