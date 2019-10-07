'use strict';

const callbacks = require('./lib/callbacks.js');
const promises = require('./lib/promises.js');
const async = require('./lib/async-await.js');

// debug
let file = `__data__/person.json`;

// File from console input
// let file = process.argv.slice(0);
// console.log(files);

// A simple error first callback that regurgitates our file contents
let showFileContents = (err,data) => {
  if(err) { throw err; }
  console.log(data);
};
  
// Use our custom file reader instead of normal fs, so that we can change our interface to it ...
// Invoke our file reader.  Note that the "reader" module is expected to simply export a function, not an object
// We should be able to call it directly with a file and any callback we like.
  
callbacks (file, showFileContents);
  
// Using our custom reader as a promise ...
//   fileReader( file )
//     .then( contents => showFileContents(null, contents ) )
//     .catch( showFileContents );
  





  
