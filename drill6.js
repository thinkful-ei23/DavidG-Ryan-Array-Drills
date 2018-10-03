'use strict';

function removeChar(string, removeList){
  let newStr = string;
  let currentStr = '';

  for(let i = 0; i < removeList.length; i++){
    for(let index = 0; index < newStr.length; index++){
      if(newStr[index] !== removeList[i]){
        currentStr += newStr[index];
      }
    }
    newStr = currentStr;
    currentStr = '';
  }
  return newStr;
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));