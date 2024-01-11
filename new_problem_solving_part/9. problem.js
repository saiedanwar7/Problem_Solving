/*
    -    Write a JavaScript function that accepts a string as a parameter and 
         converts the first letter of each word of the string in upper case.

*/

// saied how are you - Saied How Are You


var a = "saied";

console.log(a.split(""));
console.log(a.split(" "));
console.log(a.charAt(0).toUpperCase() + a.substring(1));

// charAt(0)  - seperate word ke ney
// toUpperCase() - convert capital
// substring()  - 1 ta dile - parameter is after start er por koto character porjonto jabe length tototuku nibe


function do_capitalize(str){
    var allwords = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1);
    })

    return allwords.join(" ");
}

console.log(do_capitalize("saied how are you"))
