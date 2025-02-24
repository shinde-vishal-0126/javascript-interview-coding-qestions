
//  #  Factorial finder
//| Write a function factorial that takes a non-negative integer num as input and returns its factorial the factorial of a non-negative integer n, denoted as n
// is the produce of all positive integers less then or equal to n
// the factorial of 0 is defined as 1

const factorial  =(num) =>{

    let fact = 1
    if(num < 0){
        return 'enter positive number'
    }else if(num ===0 || num ===1){
        return 1;
    }
    for(let i=2; i<= num;i++){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5))



// # write a function to calculate the factorial of a number (using recursion)
// recursion is programming technique where a function call itself in order to solved a problem
// it is a function that call it-self with smaller or similar input until it reaches a base case

const factorial1 =(num)=>{
    if(num === 0 || num === 1){
        return 1
    }else{
      return num *  factorial1(num-1) 
    }
}
console.log(factorial1(5))