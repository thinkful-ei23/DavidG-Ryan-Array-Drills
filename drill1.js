'use strict';

const Array = require('./array');

function main(){

  Array.SIZE_RATIO = 3;

  let arr = new Array();


  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();


  console.log(arr.get(0));

  arr.delete();
  arr.push('tauhida');

  console.log(arr.get(0));

}

main();


//Questions:

//1: push 1 thing
//length: 1, capacity: 3, ptr: 0.
//capacity 3 because of the resizing


//2: push 6 things
//length: 6, capacity: 12, ptr: 3.
//capcity 12 because the capacity triples based on the length when you go over the prev. capacity. the pointer moves ot the new head of the arraw, wich was dictacted by the last capacity increase. 9 of capacity used

//3: pop 3 things
//length: 3, capacity: 12, ptr: 3.
//lowers length, capacity of 9 still used

//4: push a string
//type error: Arrays only hold one pre-defined datatype

//5: logging first item
//showing value inside the head. not the data from before the capacity increase and copy over. also cannot reach into the data we popped off (ex. arr.get(3));)

//6: resizing into a bigger array gives us more room to insert into without memory errs