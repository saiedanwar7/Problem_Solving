/*
    6. Write a JavaScript function that reverse a number


*/


//------------ we do this ---------------
num11 = 12;
console.log(Number(num11.toString().split("").reverse().join("")));  //


const fruits = ["Banana", "Orange", "Apple", "Mango"];


console.log(fruits.toString());  // string e convert kore
console.log(fruits.toString().split(""));  // string ke convert kore array te
console.log(fruits.reverse());  // reverse - return array
console.log(fruits.join(" "));  // join return string

// console.log(do_reverse_number())





//-------------- function weys 1 use method ----------

function do_reverse(num1){
    return (Number(num1.toString().split("").reverse().join("")))
}

console.log(do_reverse(12));







// The Math.floor() method rounds a number DOWN to the nearest integer.


function do_reverse_number(num){

// rev - reverse
// rem - reminder

    var rev = 0;

    while(num>0){

        var rem = num % 10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    return rev;

}

console.log(do_reverse_number(1234));



/*
rev -> reverse
rem -> reminder

step 1:
------
rem = 1234 % 10 = 123.4

now rem = 4
rev = 0*10 + 4 = 4

step 2:
-------
rem = 123 % 10 = 12.3
new_rem = 3

rev = pervious rev 4 * 10 + 3  new_rem  = 43

step 3:
------
rem = 12 % 10 = 1.2
new_rem = 2

rev = pervious rev 43 * 10 + 2  new_rem  = 432

step 4:
------
rem = 12 % 10 = 1
new_rem = 1

rev = pervious rev 432 * 10 + 1  new_rem  = 4321


*/