// # find even and odd number form the given array


//#  using for loop
let arr = [10, 20, 3, 5, 9, 12, 6];
const findEvenOddNumber = (arr) => {
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return { even, odd };
};
console.log(findEvenOddNumber(arr));


// # using predefined filter method 
    let evenArray = [];
    let oddArray = []
let evenAndOdd = arr.filter((ele, index)=>{
    if(ele % 2=== 0){
        evenArray.push(ele)
    }
    else{
        oddArray.push(ele)
    }

})
console.log(evenArray);
console.log(oddArray)