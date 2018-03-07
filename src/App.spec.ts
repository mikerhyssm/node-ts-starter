const assert = require('assert');
import  App  from "./App";


describe('getTreeLayer', () => {

  it('should return a string of correct number of given characters ', () => {
    const layer = App.getTreeLayer(3, '#', 3);
    assert.equal(layer, '###');
  });

  it('should include indentation if less than basewidth', () => {
    const layer = App.getTreeLayer(3, '#', 5);
    assert.equal(layer, ' ###');
  });

});

describe('getLayers', () => {

  it('should return an array of layer sizes', () => {
    const layer = App.getLayers(3);
    assert.deepEqual(layer, [1, 3]);
  });

  it('should return an array of layer sizes', () => {
    const layer = App.getLayers(7);
    assert.deepEqual(layer, [1, 3, 5, 7]);
  });

});

describe('getTree', () => {

  it('should return tree', () => {
    const layer = App.getTree(3, '€', '£');
    assert.deepEqual(layer, [' £', '£££', '€€€' ]);
  });

});

describe('getIndentation', () => {

  it('should add indentation', () => {
    const indentation = App.getIndentation(5, 3);
    assert.equal(indentation, 1);
  });

});

describe('testCases', () => {

  it('should do tests', () => {
    App.testCases();
  });

});
