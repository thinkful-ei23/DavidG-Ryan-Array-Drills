'use strict';

function maxSum(array){
  let max = 0;
  let current = 0;

  for(let i = 0; i < array.length; i++){
    current += array[i];
    if(current > max){
      max = current;
    }
  }
  return max;
}

console.log(maxSum([4,6,-3,5,-2,1]));