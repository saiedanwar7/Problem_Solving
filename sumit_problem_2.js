/*
    -   Input : linearSearch(['a', 'b', 'c', 'd', 'e'], 'c')  search c
    -   Output : return first positon like - 2 or 'not found!'
    -   Problem : linearSearch() function implementation
    -   try to some performance build-up

*/



function linearSearch(arr, val){
    const length = arr.length;    

    for (let i = 0; i < length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }

    return 'not found!'
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'e'], 'c'));  // return positon 2, if not found then return 'not found!'