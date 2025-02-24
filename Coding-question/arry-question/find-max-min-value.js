
//  #  Write a function findMax that takes ans array of number as input and return the maximum number in the array

// # using for loop 
let arr =[10,40,20,99,999]
let array2 = [-10,-40,-20,-9,-2]

function FindMinMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i =0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return{
        max, min
    }
}
console.log(FindMinMax(array2))


// # using inbuilt method 

let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(max)
console.log(min);


// # using reduce method 
function FindMinMax1(arr){
  const min =  arr.reduce((acc,ele)=>{
return acc > ele ? acc : ele
    })
    return min
}

console.log(FindMinMax1(arr))

// # using sort method 


function FindMinMax2(arr) {
    const max = arr.sort((a,b)=>{
        // a-b
     return  b-a;
    })
    console.log(max)
    let maxValue = max.at(0)
    console.log(maxValue)
}
FindMinMax2(arr)