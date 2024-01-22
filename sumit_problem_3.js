/*
    Find most longest string from the Array and return that string index
    - return string and index

*/

function longestString(names) {
    let longestWord = "";

    for(name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)];

}


console.log(longestString(['Saied Anwar', 'Learn With Sumit', 'Hasan', 'Nayem', 'Jack'])); // ['Learn With Sumit', 1]