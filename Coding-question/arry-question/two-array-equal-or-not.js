
//#  find two array are equal or not without using inbuilt method 

//  Write a function arrayAreEqual that take two array array1 and array2 as input and return if the arrays are equal
//  contain the same element in the same order and false otherwise

let array = [1,2,3,4,5,6]
// let array2 = [1,2,3,4,5,6];
let array2 = [5,6,3,1,2,4]

console.log(array === array2) // false // here create to separate object which is references to different memory location
let array3 = array;
console.log(array3 === array2)  // false
console.log(array === array3) // true (copy the references of the original array)


//# how to check the based on the element array are equal or not 

// 1. first check the length of the both array is equal or not if length is different the the not equal 
function arrayEqual (array,array2){
    if(array.length !== array2.length){
        return false;
    }
    return array.every((currentElement, index)=>{
        if(array2.indexOf(currentElement) !== -1){
            return currentElement = [array2.indexOf(currentElement)]
        }
    })

}
console.log("ohhh,,",arrayEqual(array, array2))


// # if order does not matter then 

function findArrayEqualOrNot(array, array2){
    if(array.length !== array2.length){
        return false
    }
    return array.sort().every((ele,index)=>{
        return ele === array2.sort()[index]
    })
}
console.log("final output:",findArrayEqualOrNot(array, array2))



// # using for loop 

function arrayEqu(array, array2){

    count1 = {};
    count2 = {};

    // count the occurrences of array 
    for(let i=0;i<array.length;i++){
        e1 = array[i];
        count1[e1] = (count1[e1] || 0 ) + 1;
    }

    // count the occurrences of array2 
    for(let i=0;i<array2.length;i++){
        e2 = array2[i];
        count2[e2] = (count2[e2] || 0 )+ 1
    }

    console.log(count1);
    console.log(count2)
    for(let key in count1){
        console.log(key);
       if( count1[key] !== count2[key]){
        return false
       }
       

    }
    return true

}
console.log(arrayEqu(array, array2))


// # find array Equal or not in unordered list

function arrayEqualOrNot(array, array2){
    if(array.length !== array2.length){
        return false
    }
    let sortArray1 = [...array];
    let sortArray2 = [...array2];

  return  sortArray1.every((ele, index)=>{
   return ele === sortArray2[index]
  })
}
console.log("sorted array",arrayEqualOrNot(array, array2))