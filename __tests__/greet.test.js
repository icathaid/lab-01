'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');



describe('greet module', () => {
  // it('should say hello friend', () => {
  //   expect(greet()).toEqual('hello friend');
  // });

  it('should say hello and add whatever name is given', () => {
    expect(greet('bill')).toEqual('hello bill');
  });

  it('should return null if the input is not a string', () => {
    expect(greet(undefined)).toBe(null);
    expect(greet(6)).toBe(null);
    expect(greet(NaN)).toBe(null);
    expect(greet(null)).toBe(null);
  });

  it('should work with faked input', () => {
    let name = faker.fake('{{name.firstName}}');
    console.log('name      ', name);
    expect(greet(name)).toEqual('hello ' + name);
  });

});