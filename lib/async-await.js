'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * @param  {} file  -  func takes file, reads raw data from file; 
 * makes data from file string
 * @return stringData 
 */
async function readFile1(file) {
   let data = await readFile(file);
   let stringData = data.toString().trim();
    return stringData;
}
/**
 * @param  {} file - takes file, 
 * gets string data from file via readFile1() function;
 * make json object from stingData, updates data via updateObj() function; 
 * make data raw again and write it to file
 * read file again 
 * print data from updated file to console
 */
module.exports = exports = async (file) => { 
    let data = await readFile1(file);
    let objData = await JSON.parse(data.toString().trim());
    console.log('Data from File', objData);  
    updateObj(objData);
    data = await JSON.stringify(objData).toString('hex');
    await writeFile(file, data);
    console.log('File saved with promisify!')
    data =  await readFile(file); 
    data = await JSON.parse(data.toString().trim());
    console.log('Data from UPDATED File', data);  
}

/**
 * Adding new value to the object
 * @param  {} obj - func takes an object 
 * adding new key: value pair to the object
 * @returns updated obj 
 */
const updateObj = (obj) => {
  obj['ASYNC_AWAIT'] = 'Async-Await';
  return obj;
};

