'use strict';

jest.mock('fs');

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
    let file = `../__data__/person.json`;
    return  promises(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(typeof data).toBe('string');
    });
  });
});