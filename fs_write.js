// fs_write.js

var fs = require('fs');

var path = 'ghetto_gospel.txt',
buffer = new Buffer("Those who wish to follow me\nI welcome with my hands\nAnd the red sun sinks at last");

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'could not open file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('wrote the file successfully');
        })
    });
});
