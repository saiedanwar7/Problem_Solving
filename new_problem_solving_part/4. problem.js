
// How would you check if a number is an  interger?




//---------- basic way use method ----------
var num = 3;

console.log(Number.isInteger(num));  // true


/* another way we can use reminder


    -   % reminder diye jei number ke korbo seter bag sesh jodi 0 ashe tahole seta interger
    -   like 12 % 1 = 0 
*/

 
var num_value = 12.5;

if( num_value % 1 === 0){
    console.log("interger");
}
else{
    console.log("Not !");
}

