//1. Randomly print 1 to 6 

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log(getRandomNumber(1, 6));


// 2. Alphabetically sort name 

const students = ["Sumit", "Hasan", "Akash", "Mamun", "Emon", "Nayem"];

console.log(students.sort());

console.log(students); // also change orginal array




// 3. sorting number min to max

const roll_number = [3, 5, 1, 6, 2, 30];

console.log(roll_number.sort(function(a, b){
            return a - b;    // choto theke boro a - b
                            //  boro theke choto b - a
}))




// 4. leap year
function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
            console.log(`${year} is a leap year!`);
    } else {
        console.log(`${year} is not a leap year!`);
    }
}

isLeapYear(2028);



// 5. Count vowel

// use -> Array Iteration Methods - from, forEach
// Array search methods - includes

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence){
        let count = 0;     // 
        const letters = Array.from(sentence);   // make array from string

        letters.forEach(function(value){
            if(vowels.includes(value)){   // includes diye check korbe vowels kina
                count++;  // vowel hole count er niye rakhbe
            }
        });

        return count;
}


console.log(countVowels("I love Bangladesh"));




/*----------------  6 find duplicate value ----------------*/

// ek ta value duplicate hole - first index and current index different hobe
// unique hole first index r current index equal hobe

// use filter and indexOf


const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicate = numbers.filter(function(value, index, array){
        return array.indexOf(value) !== index;  // eita true hole value ta duplicate value hobe
});

console.log(duplicate);  // [5, 6, 4];





//========== Another Problem

for( let t = 0; t < 5; t++){
    setTimeout(() => {
        console.log(t);
    }, 1000);
}

console.log(t);


/*  
    -> happen-1 : var diye declare korar jonno i er value 3 number line e 5ta 5 ashbe r last console e ekta 5 ashbe
    -> happen-2 : let diye declare korle last er console.log not define shbe because let block scope

*/

const arrNumber = [1, 9, 87, 65, 655];
