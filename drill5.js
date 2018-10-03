'use strict';

function merge(x,y){
  let z = [];
	
  for(let i = 0; i < x.length; i++){z.push(x[i]);}
  for(let j = 0; j < y.length; j++){z.push(y[j]);}
  z.sort(function(a,b){return a-b;});
  return z;
}

console.log(merge([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));