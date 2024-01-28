//------------- simple problem -------------


// -------- 1 way ------- number + string = stirng
var a = 12;
var b = "100";

var z = a + b;

console.log(z);  // 12100
console.log(typeof z);  // 12100


//------------ 
var a1 = +"12";
var b1 = +"40";

console.log(a1 + b1);   //52

//------------ use(+) before -> string + string = number -----------

var a1 = "12";
var b1 = "40";

console.log(+ a1 + + b1);   //52



//-------- way 2 ------------

var x = "23";
var y =  40;

var num = (x + + y);
console.log(num);   // 2340