/*
2. ------- How to check if an object is an array or not? -------

    provide some code.


    - typeOf use korte parbo na because  typeOf sob gula ke object return kore
    - isArray use korte parbo
*/


console.log(Array.isArray(1));  // false
console.log(Array.isArray([]));  // true

const arr = [];
console.log(Array.isArray(arr));


//================ function use kore ============

function checkArray (elem){
    return Array.isArray(elem);
}

console.log(checkArray([])); // true  - array
console.log(checkArray({}));  // false - object