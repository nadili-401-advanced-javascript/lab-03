'use strict';

const callbacks = require('./lib/callbacks.js');
const promises = require('./lib/promises.js');
const async = require('./lib/async-await.js');

// debug files
// let file = `__data__/person.json`;
// let file1 = `__data__/person-promise.json`;
// let file2 = `__data__/person-async.json`;

// File from console input
let args = process.argv;
if (args.length < 4){
  console.log('ERROR: Wrong number of arguments: Use \'node index.js <path_to_file> < 1, 2 or 3 for type_of_file_processing>');
} else {
  let file = args[2];
  let type = args[3];
  console.log(file);

  let showFileContents = (err, data) => {
    if(err) { throw err; }
    console.log(data);
  };

  if (type === '1'){  
    callbacks (file, showFileContents);
  } else if (type === '2'){
    promises(file);
  } else if (type === '3'){
    async(file);
  } else {
    console.log('ERROR: Wrong trype of file processing. Please use \'1\' for callbacks \'2\' for promises, \'3\' for async-await');
  }
  
}




  
