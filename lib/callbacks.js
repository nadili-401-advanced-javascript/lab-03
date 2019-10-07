'use strict';

const fs = require('fs');

let myDataFromFile;
/**
 * @param  {} file
 * @param  {} callback
 */
module.exports = exports = (file, callback) => {
  //read from file
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { 
      callback(undefined, data.toString().trim()); 
      myDataFromFile = JSON.parse(data); 
      //update data 
      updateObj (myDataFromFile);
      let myDataToFile = JSON.stringify(myDataFromFile).toString('hex');
      // write file (update content of the same file)
      fs.writeFile(file, myDataToFile, (err) => {
        if (err) { throw err; }
        console.log('File saved!');
      });
      // read from updated file to verify data indeed has been updated
      fs.readFile( file, (err, data) => {
        if (err) { throw err; }
        let content = data.toString().trim();
        console.log('Updated file content', content);   
      });
    }
  });
};

/**
 * Adding new value to the object
 * @param  {} obj
 * @returns obj 
 */
const updateObj = (obj) => {
  obj['new-key'] = 'new-value';
  return obj;
};
