//====================================================================================================================================================================================
// Write a function findMax that takes ans array of nomver as input and return the maximaum numver in the array
//====================================================================================================================================================================================

// solution 1
const findMax = (array) =>{
    let max = array[0];
    let min = array[0]
    for(let i=0;i< array.length;i++){
        if(array[i] > max){
            max = array[i]
        }
        if(array[i] < min){
            min = array[i]
        }
    }
    return { max, min}

} 

console.log(findMax([10,40,20,99,999]));
console.log(findMax([-10,-40,-20,-9,-2]));


//=================================================================================================================================================================================

// solution 2 

const findMaxAndMin = (str) =>{
    const max = Math.max(...str);
    const min = Math.min(...str);
    return {
        max, min
    }
}
// call the function
console.log("find max and min vlaue",findMaxAndMin(([10,40,20,99,999])));
console.log(findMaxAndMin([-10,-40,-20,-9,-2]));


