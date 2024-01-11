/*
3. How to empty an array in JavaScript?

    - options - do not reset it to a new array,
              - do not loop through to pop each value


*/

// just basic way to solve problem


let arr = [1, 2, 3, 4, 5, 6, 7];
arr.length = 0;

console.log(arr); // []
