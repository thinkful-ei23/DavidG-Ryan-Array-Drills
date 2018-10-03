'use strict';

function products(x){
  let y = [];
  for(let i = 0; i < x.length; i++){
    let sum =1;
    for(let j = 0; j< x.length; j++){
      if(i===j){}
      else{sum = sum * x[j];
      }
    }
    y.push(sum);
  }
  return y;
}

console.log(products([1, 3, 9, 4]));