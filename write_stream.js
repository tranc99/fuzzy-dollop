// write_stream.js

const fs = require('fs');

writeStream = fs.createWriteStream('secret.txt');

// write some data with a base64 encoding
writeStream.write('aef35ghhjdk74hja83ksnfjk888sfsf', 'base64');

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
  console.log('wrote all data to file');
});

// close the stream
writeStream.end('end');
