'use strict';

const promises = require('../lib/promises.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let file = `../__data__/bad.txt`;
    return  promises(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).toBeUndefined();
    });
  });

  it('when given a real file, returns the contents', () => {
    jest.setTimeout(30000);
    let file = `../__data__/person1.json`;
    return  promises(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(typeof data).toBe('string');
    });
  });
});