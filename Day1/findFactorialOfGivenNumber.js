//====================================================================================================================================================================================
// Factorial finder
// Write a function factorial that takes a non-negative integer num as input and returns its factorial the factorial of a non-negative integer n, denoted as n
// is the produce of all positive integers less then or equla to n
// the factorial of 0 is defined as 1
//====================================================================================================================================================================================

const findFactorial = (num) => {
    let fact = 1;
  if (num < 0) {
    console.log("negative number factorial not passible ");
  }
 else if(num === 0 || num ===1){
    return 1
 }
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  console.log(fact);
};
findFactorial(5);
