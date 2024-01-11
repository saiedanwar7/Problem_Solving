

/*
    - Make this work :
        duplicate([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

*/

//---- 1 simple way is use concate look ----

var a = [1, 2, 3, 4, 5];

console.log(a.concat(a)); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

console.log(a); // It's do not change orginal array

//------------ use function ---------

function duplicate(arr){
    return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]