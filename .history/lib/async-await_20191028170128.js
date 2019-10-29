'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * @param  {} file
 * @return stringData 
 */
async function readFile1(file) {
   let data = await readFile(file);
   let stringData = data.toString().trim();
    return stringData;
}
/**
 * @param  {} file
 * @param  {} stringData
 * @param  {} data
 */
module.exports = exports = (file) => { 
    readFile1(file)
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
      .then(()=> readFile(file).then (data => {
        data = JSON.parse(data.toString().trim());
        console.log('Data from UPDATED File', data);  
      }))  
}

/**
 * Adding new value to the object
 * @param  {} obj
 * @returns obj 
 */
const updateObj = (obj) => {
  obj['ASYNC_AWAIT'] = 'Async-Await';
  return obj;
};

