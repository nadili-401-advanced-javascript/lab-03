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
    let data = await readFile1(file);
    let objData = await JSON.parse(data.toString().trim());
   console.log('Data from File', objData);  
    updateObj(objData);
   data = JSON.stringify(objData).toString('hex');
    await writeFile(file, data);
    console.log('File saved with promisify!')
    data =  await readFile(file); 
    data = await JSON.parse(data.toString().trim());
    console.log('Data from UPDATED File', data);  
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

