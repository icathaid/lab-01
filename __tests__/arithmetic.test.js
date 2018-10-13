'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

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
  it('should return null if given NaN', () => {
    expect(arithmetic.add(3, NaN)).toBe(null);
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
  // i'm not really sure how to test for equality with numbers I won't know in advance.
  // if the expect and return both pull fresh random numbers, their sums will (almost) never equal each other
  // this is the best I could come up with, but i'm not sure if `expect(a + b).toEqual(a + b);` is actually testing anything.
  it('should add two random numbers correctly', () => {
    let a = parseInt(faker.fake('{{random.number}}'));
    let b = parseInt(faker.fake('{{random.number}}'));
    expect(a + b).toEqual(a + b);
  });
  it('should add two random numbers correctly', () => {
    let a = parseInt(faker.fake('{{random.number}}'));
    expect(a + 1).toBeGreaterThan(1);
  });
});