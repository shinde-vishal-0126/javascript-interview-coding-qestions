// # find the 2nd largest value form the give array

let arr = [20, 30, 40, 999, 50, 89];

function findSecondLargest(arr) {
  let firstMax = Math.max(...arr);
  console.log(firstMax);
  let index = arr.indexOf(firstMax);
  console.log(index);
  arr.splice(index, 1);
  let secondLargest = Math.max(...arr);
  console.log(secondLargest);
}
findSecondLargest(arr);

// # using for loop without built in method

const findSecondLargest2 = (arr) => {
  let largest = 0;
  let secondeLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondeLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondeLargest && arr[i] !== largest) {
      secondeLargest = arr[i];
    }
  }

  return (secondeLargest === largest
    ? "no second largest number are present"
    : secondeLargest);
};
console.log(findSecondLargest2(arr));


//# same as another approach 

const findSecondLargest3 = (arr) =>{
    let largest = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    let secondeLargest = arr[0];
    for(let i=0;i< arr.length;i++){
        if(arr[i] > secondeLargest  && arr[i] < largest){
            secondeLargest = arr[i]
        }
    }
    return secondeLargest === largest ? 'no second largest number ': secondeLargest
}
console.log(findSecondLargest3(arr))
