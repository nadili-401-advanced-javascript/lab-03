'use strict';

const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * @param  {} file - takes file,
 * gets string data from file via readFile1() function;
 * make json object from stingData, updates data via updateObj() function;
 * make data raw again and write it to file
 * read file again
 * print data from updated file to console
 */

module.exports = exports = (file) => { 
  readFilePromise(file)
    .then (data => {
      let stringData = JSON.parse(data.toString().trim());
      console.log('Data from File', stringData);
      return stringData;
    })
    .catch(error => console.log(error))
    .then((data) => updateObj (data))
    .then((data) => JSON.stringify(data).toString('hex'))
    .then ((data) => writeFile(file, data))
    .then(() => console.log('File saved with promisify!'))
    .catch(error => console.log(error))
    .then(()=> readFileHelper(file))
    .then(data => console.log('updated data from file', data));
 
};
/**
 * Adding new value to the object
 * @param  {} obj - func takes an object
 * adding new key: value pair to the object
 * @returns updated obj
 */
const readFileHelper = (file) => {
  return readFilePromise(file)
    .then (data => JSON.parse(data.toString().trim()))
    .catch(error => console.log(error));
};


/**
 * Adding new value to the object
 * @param  {} obj
 * @returns obj 
 */
const updateObj = (obj) => {
  obj['PROMISES'] = 'Promises';
  return obj;
};

