//  # sort the given array
let array = [10, 9, 5, 6, 4, 3, 8, 1, 2];
let sortedArray = array.sort();
console.log(sortedArray);

//  #
// write function to sort an array of number in acceding and descending order

// - The number should take an array of numbers as input
// - it should return a new array with the numbers stored in ascending order
// - The original array should remains unchanged
// - you are not allowed to used build in sort() method

// so fixed this issue you have to used compare method
const sortArray = (arr) => {
  // it sort acceding order
  // return arr.sort();

  // if you want to sort in Descending order then used following way
  return arr.sort((a, b) => {
    return a - b;
  });
  // The issue you're encountering is because the Array.prototype.sort() method sorts elements as strings by default, even if the array contains numbers. This results in sorting based on ASCII or Unicode order of the string representations of the numbers. For example, "10" comes before "2" because the string "1" in "10" is lexicographically less than "2".
  // sor() method are work on the asci code so be carefully when you work with string
  // for example you have to give 10 it return 10 first in acceding order.
};
console.log(sortArray(array));



// # how to sort the element of array without built in method

const sortElement = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; i++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(sortElement(array));
