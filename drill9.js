'use strict';

function stringRotation(string1,string2){
  let string3= string2+string2;
  if(string3.includes(string1)){
    return true;
  }else{
    return false;
  }
}
  
console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));