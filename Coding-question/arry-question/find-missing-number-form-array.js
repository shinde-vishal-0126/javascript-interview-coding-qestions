
// # find missing number form the given array 

let arr = [1,2,3,5,7,9];
const findMissingNumber = ()=> {
    let missingArray = [];
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);
    for(let i = minValue ; i<= maxValue ; i++){
        if(arr.indexOf(i) < 0){
            missingArray.push(i)
        }
    }
    return missingArray;

}
console.log(findMissingNumber(arr))