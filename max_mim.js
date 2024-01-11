// Find max and mim value from Array 

/*
=================== Find the Lowest (or Highest) Array Value =========================

    -   There are no built-in functions for finding the max or min value in an array.

    To find the lowest or highest valu you have 3 options:

    1.  Sort the array and read the first or last element
    2.  Use Math.min() or Math.max()
    3.  Write a home made function


*/

/*
----------------- Find Min or Max with sort() ---------------

After you have sorted an array, you can use the index to obtain the highest and lowest values.

*/

// Way - 1 :  Sort Ascending

//1. ===================== Max Array ================

const num1 = [40, 100, 1, 5, 25, 10];

num1.sort(function(a, b){
    return a - b;
})

console.log(num1); // change orginal array  [1, 5, 10, 25, 40, 100]

// lowest value 
console.log(num1[0]);   // now array lowest value is : 1

// highest value
let highest_value = num1[num1.length-1];
console.log(highest_value);  // 100



//2. --- Way - 2:  Use Math.min() or Math.max() -----

const points11 = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr){
    return Math.max.apply(null, arr);  // Math.max.apply for minimum value
}

let max_value = myArrayMax(points11);
console.log("The highest value of Array is:", max_value);   // 100
