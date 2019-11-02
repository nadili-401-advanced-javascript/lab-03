'use strict';

const fs = require('fs');

let myDataFromFile;
/**
 * @param  {} file - takes file,
 * gets string data from file via readFile1() function;
 * make json object from stingData, updates data via updateObj() function;
 * make data raw again and write it to file
 * read file again
 * print data from updated file to console
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
 * @param  {} obj - func takes an object
 * adding new key: value pair to the object
 * @returns updated obj
 */
const updateObj = (obj) => {
  obj['CALLBACKS'] = 'Callbacks';
  return obj;
};
