//1. Given a string, reverse each word in the sentence 

/*
    - How are you
    - uoy era woH

*/


var str = "How Are You";

    // var savedStrArray = str.split(" ");
    // console.log(savedStrArray);     // ['How', 'Are', 'You'];

var savedStrArray = str.split(" ")  // ['How', 'Are', 'You'];

    .map(function (word){
        return word.split("").   // ['H', 'o','w','', 'A','r','e','','Y','o','u'];
                reverse().      // reverse split() use korle error dito because it's not function.
                join("");     // ['uoY','','erA','','woH']


    })

console.log(savedStrArray.join(" "));  // join return array to string - 'woH erA uoA'
console.log(typeof savedStrArray);  // string object 
   
console.log(str);


//2.  reverse stirng 


var str2 = "Can you give me the any problem";

var savedStr2Array = str2.split(" ")
.map(function(word1){
    return word1.split("").reverse().join("");
})

console.log(savedStr2Array.join(" "));