//? calculate the average of given array
// write a function called calculateAverage that takes an array of numbers as input and return the average of those numbers

// accept array of numbers as input
// calculate the sum of all the number in the array
// divide the sum by the total numbers of element in the array to find the average
// return the calculated average

let arr = [3, 4, 5, 6, 7, 1, 2];
function calculateAverage(arr) {
  let length = arr.length;
  const sum = arr.reduce((acc, curEle) => {
    return acc + curEle;
  });
  const avg = sum / length;

  return avg;
}

console.log(calculateAverage(arr));


// 2 approach 

function calculateAverage1(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    console.log(sum)
    let avg = sum/arr.length;
    return avg;
}
console.log(calculateAverage1(arr))
