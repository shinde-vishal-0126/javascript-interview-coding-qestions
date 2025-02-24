
// write a function to calculate the sum of square of all elements in an array 
// give an array [1,2,3,4] the function should return because 1*1 + 2*3 3*3   = return 1+4+9 == 14
let arr = [1,2,3,4,5]

function sumOfSquare(arr){
    const square = arr.map((ele, index)=>{
      return  ele * ele
    }).reduce ((acc , ele )=>{
        return acc + ele
    })  
    return square 
}
console.log(sumOfSquare(arr))


// also using for loop 


function findSomeOfSquare(arr){
    let sumOfSquare = 0
    for(let i=0;i<arr.length;i++){
     sumOfSquare = sumOfSquare + arr[i] * arr[i]
    }
    return sumOfSquare
}
console.log('sumoSquare', findSomeOfSquare(arr))