/*
    -   Write a JavaScript function to get the number of occurrences of each letter in specified string.
    -   Check the string by function and count how many time each character exist in String. After Count them and return as a object {property:value}
*/


// At first we see the part of the problem




// String convert to split Array

let a = "apple";
console.log(a.split(""));    //  ['a', 'p', 'p', 'l', 'e']



// object e kono value ache kina check korte parbo
//object property - obj.hasOwnProperty()

const obj = {a : 1};
console.log(obj.hasOwnProperty('b'));   // false
console.log(obj.hasOwnProperty('a'));   // true

console.dir(obj); 



// forEach Iterator apply on Array

let b = "banana";

var obj1 = {};

b.split("").forEach(function(value){
    console.log(value);   // get array value - b a n a n a
    
    console.log(obj1.hasOwnProperty(value));   // false  
    // return false - object er moddhe aage theke value na thakle false return korbe

})




/*--------------------- Solution ------------------------
Step:
-----

    -   Take one function and put a parameter as a stirng.
    -   At first split to string, split("") provide Array
    -   Now in array, run iterators - forEach, 
    -   Then check every value by object.hasOwnProperty()
    -   If value not found add on them in object, and if value found make them double that's it 

*/

function occ(str) {
  
    const occurrences = {};    // take a object

    str.split("").forEach(function (elem) {

        // if not exist do this - add this value on object {}
        if(occurrences.hasOwnProperty (elem) === false){
            occurrences[elem] = 1;
        }

        // if exist do this - make them double + +
        else {
            occurrences[elem]++;
        }

    })
    return occurrences;
}



console.log(occ("apple"));
console.log(occ("banana"));