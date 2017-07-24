// writefile.js

//imports the fs module
const fs = require('fs');

// write to a new file named 2pac.txt
fs.writeFile('2pac.txt', 'But still I\'m having memories of high speeds when the cops crashed\nAs I laugh, pushin the gas while my Glocks blast\nWe was young and we was dumb but we had heart', (err) => {
  // throws an error, you could also catch it here
  if (err) throw err;
  // success case, the file was saved
  console.log('Lyric saved!');
});
