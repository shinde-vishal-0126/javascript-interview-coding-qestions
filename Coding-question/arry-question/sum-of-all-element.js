
// # find the sum of all element of the given array 

let arr = [1,2,3,4,5,6,7]

function sumAllElements (arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum;
}
console.log(sumAllElements(arr))


// # using reduce method 
let sum = arr.reduce((acc, ele)=>{
    return acc + ele;
})
console.log('reduce sum', sum)