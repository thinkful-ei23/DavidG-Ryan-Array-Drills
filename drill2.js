'use strict';

function urlify (string){
  let newStri = '';

  for(let i = 0; i < string.length; i++){
    if(string[i] === ' '){
      newStri += '%20';
    }else{
      newStri += string[i];
    }
  }
  return newStri;
}

console.log(urlify('tauhida parveen'));