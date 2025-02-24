// #  reverse the given number

// using normal while loop
let num = 3421;

function reverseNumber(num) {
  let reverse = 0;
  while (num > 0) {
    let rem = num % 10; // return remaining
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }

  return reverse;
}
console.log(reverseNumber(num));

//#  using for loop

const reverse2 = (num) => {
  let reverse = 0;
  num = num.toString(); // Convert number to string
  let arr = num.split(""); // Convert string to array

  // Loop through the array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse = reverse * 10 + parseInt(arr[i]); // Multiply by 10 and add the digit
  }
  return reverse; // Return the reversed number
};
console.log("reverse2", reverse2(num)); // Output: 54321




//  # using reduce method

const reserver3 = (num) => {
  num = num.toString();
  let arr = num.split("");
  // console.log(arr);
  const revers = arr.reduce((acc, ele) => {
    return ele + acc;
  }, []);
  return parseInt(revers);
};

console.log("reverse3 ", reserver3(num));
