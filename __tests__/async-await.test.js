'use strict';

jest.mock('fs');

const async = require('../lib/async-await.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', async () => {
    let file = `../__data__/bad.txt`;
   await async(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).toBeUndefined();
    });
  });

  it('when given a real file, returns the contents', async () => {
    let file = `../__data__/person2.json`;
   await async(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(typeof data).toBe('string');
    });
  });
});