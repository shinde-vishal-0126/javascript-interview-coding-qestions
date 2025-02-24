

// # union means unique element of both array element 



let array  =[1,3,4,5,7,6,9,10,10,10]
let array2 = [3,5,6,10,11]

let unionArray = [...array, ...array2];
console.log(unionArray);
let unionResult = [...new Set(unionArray)];
console.log(unionResult)