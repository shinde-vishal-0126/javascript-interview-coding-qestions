// # Write a function to find the nth fibonacci number
// the fibonacci series is a sequences of numbers in which each number is the sum of the two preceding once
// it start with 0 and 1  and the subsequent numbers are calculated by adding the last two numbers the fibonacci series look like 0,1,1,2,3,5,8,13,21

function fibonacci(num) {
  let a = 0;
  let b = 1;

  if (num <= 0) {
    console.log("enter the positive number");
    return num;
  }
  if (num === 1) {
    console.log(a);
    return num;
  }
  console.log(a);
  console.log(b);

  for (let i = 2; i <= num; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

fibonacci(10);

//#  using recursive approach

let num = 10
function fibonacci1(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  } else {
   return fibonacci1(num - 1) + fibonacci1(num - 2);
  }
}
// console.log(fibonacci1(num));

function printFibonacci(num){
    for(let i =0;i<=num;i++){
     console.log(fibonacci1(i))

    }
}
printFibonacci(num)