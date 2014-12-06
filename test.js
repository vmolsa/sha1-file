'use strict';

var sha1 = require('./index');
var assert = require('assert');

assert.equal(sha1('./LICENSE.md'), '635cf3c238455570c909d24a5237050cbb1837e9');

sha1.async('./LICENSE.md', function (data) {
  assert.equal(data, '635cf3c238455570c909d24a5237050cbb1837e9');
});

sha1.async('./LICENSE.md', function (data) {
  assert.equal(data, '635cf3c238455570c909d24a5237050cbb1837e9');
}, true);

// errors

// non-strict: will pass through an error to `data`
sha1.async('./null', function (data) {
  assert.equal(data.code, 'ENOENT');
});

