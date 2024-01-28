/*
    -   loop an array of objects and remove all objects which don't have gender's value male

    
*/

var arr = [
    {name: "Saied", gender: "male"},
    {name: "harshita", gender: "female"},
    {name: "abcd", gender: "nonspecified"},
    {name: "harshi", gender: "female"},
]


// this way make new array

var newarr = arr.filter(function (elem) {
    // console.log(elem);
    return elem.gender === "male";
})

console.log(newarr); // saied

var arr1 = [
    {name: "Saied", gender: "male"},
    {name: "harshita", gender: "female"},
    {name: "abcd", gender: "nonspecified"},
    {name: "harshi", gender: "female"},
]

//--------------- Another Ways - Step by Step --------------------

// count non-male

var count = 0;

arr1.forEach(function (elem) {
    if(elem.gender !== "male"){
        count++;
    }
});
console.log(count);   // count 3



// array splice 

let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num.splice(2, 1));   // splice(start_index, item), splice take item from array - [3] 


//  delete 1 non-male items, just first non-male item

/*

for (var j = 0; j < arr1.length; j++){
    if(arr1[j].gender !== "male"){
        arr1.splice(j, 1);
    }
}
console.log(arr1);

*/


// delete all non-male item from array

var arr2 = [
    {name: "Saied", gender: "male"},
    {name: "harshita", gender: "female"},
    {name: "abcd", gender: "nonspecified"},
    {name: "harshi", gender: "female"},
]


// delete one by one non-male and count their lenght.

for (var i = 1; i <= count; i++){
    for (var j = 0; j < arr2.length; j++){
        if (arr2[j].gender !== "male"){
            arr2.splice(j, 1);
        }
    }
}
console.log(arr2);   // [{'Saied', gender: 'male'}]