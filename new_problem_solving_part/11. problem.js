/*
    -   loop an array and add all numbers of it


*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = 0;

// arr.forEach (function (elem) {
//     sum = sum + elem;
// })

// console.log(sum);   // 36


// ---- use for of -----

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let sum1 = 0;

for (let i of arr1){
    sum1 += i;
}

console.log(sum1);


