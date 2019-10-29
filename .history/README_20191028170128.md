# LAB - 03

## Async

### Author: Nadya Ilinskaya/Seattle-js-401n14

### Links and Resources
* [submission PR](https://github.com/nadili-401-advanced-javascript/lab-03/pull/1)
* [travis](https://travis-ci.com/nadili-401-advanced-javascript/lab-03)

### Modules
#### 1 `callbacks.js`
#### 2 `promises.js`
#### 3 `async-await.js`

All three modules are updating JSON file content 
* reading from JSON file
* updating data 
* writing JSON file back 


### Setup
#### Running the app
* `node index.js <path to your file> <processing module>`  

##### Processing module can be:

* '1' - callbacks
* '2' - promises
* '3' - async-await

##### Correct ways to run app: 

`node index.js __data__/person.json 1` 
`node index.js __data__/person.json 2`
`node index.js __data__/person.json 2`  

### Limitations 
* input has to have exactly four arguments in order for app run properly
* file have to be valid json

  
#### Tests
(JEST docs used for tests)[https://jestjs.io/docs/en/asynchronous.html]
* Unit Tests: 'npm test'
* Lint Tests: 'npm run lint' 

(!!!NOTE!!! - async-await.js and async-await.test.js files are included in eslintignore as linter does not async-await recognize syntaxes)



#### UML
![ UML for the 'callbacks' part of the application ](/assets/lab-03-uml.jpg)