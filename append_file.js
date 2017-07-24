// append_file.js

//imports the fs module
const fs = require('fs');

// add a line to a lyric file, using appendFile
fs.appendFile('empirestate.txt', 'Right there up on Broadway', (err) => {
  if (err) throw err;
  console.log('The lyrics were updated!');
});
