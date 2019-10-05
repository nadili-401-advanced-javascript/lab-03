'use strict';

const fileReader = require('./lib/reader.js');
const callbacks = require('./lib/callbacks.js');
const promises = require('./lib/promises.js');
const async = require('./lib/async-await.js');

let file = `__data__/person.json`;

// A simple error first callback that regurgitates our file contents
let showFileContents = (err,data) => {
  if(err) { throw err; }
  console.log('I\'m in index.js/showFileContents', data);
};

// Use our custom file reader instead of normal fs, so that we can change our interface to it ...
// Invoke our file reader.  Note that the "reader" module is expected to simply export a function, not an object
// We should be able to call it directly with a file and any callback we like.

fileReader(file, showFileContents);

// Using our custom reader as a promise ...
fileReader( file )
  .then( contents => showFileContents(null, contents ) )
  .catch( showFileContents );

