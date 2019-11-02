'use strict';

jest.mock('fs');

const asyncFunc = require('../lib/async-await.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error',  () => {
    let file = `../__data__/bad.txt`;
    asyncFunc(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).toBeUndefined();
    });
  });

  it('when given a real file, returns the contents', () => {
    let file = `../__data__/person.json`;
    asyncFunc(file, async (err, data) => {
      expect(err).toBeUndefined();
      expect(typeof data).toBe('string');
    });
  });
});