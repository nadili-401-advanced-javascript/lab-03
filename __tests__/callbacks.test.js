'use strict';

jest.mock('fs');

const callbacks = require('../lib/callbacks.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', (done) => {
    let file = `../__data__/bad.txt`;
    callbacks(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).toBeUndefined();
      done();
    });
  });

  it('when given a real file, returns the contents', (done) => {
    let file = `../__data__/person.json`;
    callbacks(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(typeof data).toBe('string');
      done();
    });
  });

});

