'use strict';

function twoDArray(array){
  let horizontal = [];
  let vertical = [];

  for(let h = 0; h < array.length; h++){
    for(let v = 0; v < array.length; v++){
      if(array[h][v] === 0){
        horizontal.push(h);
        vertical.push(v);
      }
    }
  }

  for(let h = 0; h < array.length; h++){
    for(let v = 0; v < array.length; v++){
      if(horizontal.includes(h) || vertical.includes(v)){
        array[h][v] = 0;
      }
    }
  }

  return array;
}

console.log(twoDArray([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]
));
