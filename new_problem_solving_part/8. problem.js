/*
    8. Write a JavaScript function that returns a passed string with letters in alphabetical order.

        - apple - aelpp
*/

//-------------- do this -------------
var letter = "apple";
console.log(letter.split("").sort().join(""));




//------------ use function -------------

function stringAlphabeticalOrder(str){

    return str.split("").sort().join("");
}


console.log(stringAlphabeticalOrder("apple"));
console.log(stringAlphabeticalOrder("saied"));