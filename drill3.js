'use strict';

function filterArray(array){
  for(let i = 0; i < array.length; i++){
    const num = array[i];
    if(num < 5){
      array.splice(i, 1);
      i--;
    }
  }

}

const test = [3,2,5,6,3,7,4,1];
filterArray(test);
console.log(test);