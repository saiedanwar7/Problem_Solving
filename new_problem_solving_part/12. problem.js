/* 
    - In an array of numbers and strings, only addition those members which are not strings.


*/

var arr = ["hehehhe", 123, "hghc", "ahc", 4, 5];
var sum = 0;

arr.forEach(function (elem) {
    if(typeof elem === 'number'){
        // sum = sum + elem;
        sum += elem;   // same result
    }
});

console.log(sum);  // 132
