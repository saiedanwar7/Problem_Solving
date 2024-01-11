/*----------------  6 find duplicate value ----------------*/

// ek ta value duplicate hole - first index and current index different hobe
// unique hole first index r current index equal hobe

// use filter and indexOf


const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicate = numbers.filter(function(value, index, array){
        return array.indexOf(value) !== index;  // eita true hole value ta duplicate value hobe
});

console.log(duplicate);  // [5, 6, 4];

