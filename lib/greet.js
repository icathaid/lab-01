'use strict';

module.exports = (name) => {
  if(!name){
    return null;
  }
  else if(typeof name !== 'string'){
    return null;
  }
  return 'hello ' + name;
};