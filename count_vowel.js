// 5. Count vowel

// use -> Array Iteration Methods - from, forEach
// Array search methods - includes

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence){
        let count = 0;     //   count er moddhe sob gula rahkbe.
        const letters = Array.from(sentence);   // make array from string

        letters.forEach(function(value){
            if(vowels.includes(value)){   // includes diye check korbe vowels kina
                count++;  // vowel hole count er niye rakhbe
            }
        });

        return count;
}


console.log(countVowels("I love Bangladesh"));


/*==================================================================
step :
------
1. ekta counter thakbe jekhane count kora value gula rakhbe
2. giving string theke array te convert korte hobe...Array.from method diye
3. tarpor forEach use kore array te itarate korbo
4. eibar sei array te vowel ache kina check korte hobe...includes method diye

*/

const vowels1 = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];


function countVowels1(sentence1){
    let count1 = 0;
    const letter1 = Array.from(sentence1);
    //console.log(letter1)

    letter1.forEach(function(value){
        if(vowels1.includes(value)){
            count1++;
        }
    })
    return count1;

}

console.log(countVowels1("I live in bangladesh"))