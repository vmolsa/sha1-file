var fs = require('fs');
var sha1File = require('../index.js');
var files = process.argv;

files.splice(0, 1);
files.splice(0, 1);

if (files.length) {
  files.forEach(function(file) {
    if (fs.existsSync(file)) {
      console.log(sha1File(file));
    }
  });
}
