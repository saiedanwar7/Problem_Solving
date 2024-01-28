/*

    -   Write a JavaScript function to clone an new array

    -   Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n'
        elements of the array.

*/



//------------- shortcut way --------------

// function cloneArr(arr){
//     return [...arr];
// }

// // cloneArr([1, 2, 3, 4, 5])
// var newarr = cloneArr([1, 2, 3, 4, 5]);
// console.log(newarr);


//-------------- use forEach -----------------

function cloneArr1 (arr) {
    var newarr = [];

    arr.forEach(function (e) {
        newarr.push(e);
    })
    return newarr;
}

var abc = [1, 2, 3, 4, 5];

// console.log(cloneArr1(abc));

var myNewArray = cloneArr1(abc);
console.log(myNewArray);  [1, 2, 3, 4, 5]

myNewArray.pop();
console.log(myNewArray); [1, 2, 3, 4]

console.log(abc);


