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
module.exports = exports = async (file) => { 
   readFile1(file)
    await(data => {
        let stringData = JSON.parse(data.toString().trim());
        console.log('Data from File', stringData);
        return stringData;
      })
    const data = await updateObj (data);
    await((data) => JSON.stringify(data).toString('hex'))
    await ((data) => writeFile(file, data))
    await(() => console.log('File saved with promisify!'))
    await(error => console.log(error))
    await (()=> readFile(file).then (data => {
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

