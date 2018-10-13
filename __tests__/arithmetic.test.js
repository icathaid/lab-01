'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic module', () => {
  //  check validity of add inputs
  it('should have two inputs', () => {
    expect(arithmetic.add(3)).toBe(null);
  });
  it('should return null if given null', () => {
    expect(arithmetic.add(3, null)).toBe(null);
  });
  it('should return null if given undefined', () => {
    expect(arithmetic.add(3, undefined)).toBe(null);
  });
  it('should ignore more than two inputs', () => {
    expect(arithmetic.add(1,1,9)).toEqual(2);
  });

  //  check validity of subtract inputs
  it('should have two inputs', () => {
    expect(arithmetic.subtract(3)).toBe(null);
  });
  it('should return null if given null', () => {
    expect(arithmetic.subtract(3, null)).toBe(null);
  });
  it('should return null if given undefined', () => {
    expect(arithmetic.subtract(3, undefined)).toBe(null);
  });
  it('should ignore more than two inputs', () => {
    expect(arithmetic.subtract(3,2,9)).toEqual(1);
  });


  //  check validity of outputs

  it('should add two numbers correctly', () => {
    expect(arithmetic.add(3,5)).toEqual(8);
  });
  it('should subtract two numbers correctly', () => {
    expect(arithmetic.subtract(6,4)).toEqual(2);
  });

});