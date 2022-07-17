'use strict';

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. idx Position
const fruits = ['🍅','🍌'];
/* 
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
*/

// 3. Looping
// a. for
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits){
    console.log(fruits);
}

// c. forEach
fruits.forEach((fruit,idx,array)=>{
    console.log('==========forEach==========')
    console.log('fruit',fruit);
    console.log('idx',idx);
    console.log('array',array);
    console.log(fruit,idx,array);
});
fruits.forEach((fru)=>{
    console.log('==========forEach v2==========')
    console.log(fru)
});

/*
?: -> 작성 안해도 됨
 forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

// d. Addtion, deletion, copy
//add item to the end
fruits.push('🥝','🍇');
console.log(fruits);

//add item to the beginning
fruits.unshift('🍋','🍊');

//remove an item from the end
fruits.pop();
console.log(fruits);

//remove item from the beginning
fruits.shift();
console.log(fruits);

// shift, unshift are slower than pop, push
fruits.splice(1,2);
console.log(fruits);

fruits.splice(1,1,'🍡','🍯');

//combine two arrays
const fruits2 = ['🥐','🥨'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
console.log(fruits.indexOf('🍊'));
console.log(fruits.includes('🍊'));