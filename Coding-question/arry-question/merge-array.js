
// # how to merge two array :

let arr = [1,2,3,4];
let arr1 = [5,6,7,8]
// merge array using concat method 

let mergeArray = arr.concat(arr1);
console.log(mergeArray);

// # using spread operator 

let merge = [...arr, ...arr1]
console.log(merge);

// # Array.prototype.push.apply()

Array.prototype.push.apply(arr, arr1);
console.log(arr)


// # using reduce method 

let newArray = [arr, arr1];
let merge1 = newArray.reduce((acc, ele)=>{
    console.log("ele", ele)
    console.log(acc)
    return acc.concat(ele);
})
console.log(merge1)