/*

    -   Write a JavaScript function that checks whether a passed string is palindrome or not
    -   like - lool , poop 
    -   loop it's not

*/

//------------- ways 1 ---------------

function stringPalChecker(str){
    var reversed = str.split("").reverse().join("");
    if(reversed === str) 
            return true;
        else 
            return false;

}

console.log(stringPalChecker("poop"));  // true
console.log(stringPalChecker("loop"));  // false





//------------ ways - 2 ----------


function stringPalChecker1(str1){
    var reversed1 = str1.split("").reverse().join("");
    return reversed1 === str1;

}

console.log(stringPalChecker1("poop"));
console.log(stringPalChecker1("loop"));

