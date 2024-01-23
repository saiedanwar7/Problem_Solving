// Find falsy value from Array 
// Find falsy value from Object



const mixedArr = ["lws", undefined, "learn With Sumit", false, "", "apple", 40, "k", true, "Thanks all", NaN];


const trueArray = mixedArr.filter(function(el){
    if(el){
        return true;
    }
    else{
        return false;
    } 
});

console.log(trueArray);




//---------------- Using Boolean Function ----------------

const mixedArr1 = ["lws", undefined, "learn With Sumit", false, "", "apple", 40, "k", true, "Thanks all", NaN];


const trueArray1 = mixedArr1.filter(Boolean);

console.log(trueArray1);



// Find falsy value from Object

const obj = {
    a: "lws",
    b: "undefined",
    c: "Learn With Sumit",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN

};

const trueObj = function(obj) {
    for (let i in obj){
      if(!obj[i]) {
        delete obj[i];
      }
    }
    return obj;
}

console.log(trueObj(obj))