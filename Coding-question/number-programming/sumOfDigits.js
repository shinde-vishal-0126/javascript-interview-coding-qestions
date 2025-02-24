
// # Sum of digits
// Write a function that takes a number as input and return the sum of its digits
// we have to given input as number
//  so we need to convert number into the array of string so it make iterable
// then using reduce method return the sum of all digits but you need to again currentElement convert into the number

function sumOfDigits(num){
    let str =  num.toString();
    let sum = 0;
    for(let i=0;i<str.length;i++){
        sum = sum + parseInt(str[i])
       
    }
    console.log(sum);
}
console.log(sumOfDigits(12345))


// 2 approach  without converting into the string 

function sumOfDigits1(num){
    let sum = 0
    while(num > 0){
        let rem = num %10;
        sum = sum + rem;
        num = Math.floor(num / 10);
        
    }
    return sum;
}
console.log(sumOfDigits1(102030))



// using convert into array 

function sumOfDigits2(num){
    let str = num.toString();
    str = str.split("");
    let sum = 0
    for(let value of  str){
        sum = sum +parseInt( value);
    }
    return sum;
}
console.log(sumOfDigits2(3456))



const sumOfDigits6 = (num) => {
    // - here Given input is num so we need to convert into the array or string so you have to use Array.from() method
    // - Array.from(String(num), Number):
    // - Array.from() is a method that creates a new array from an iterable or array-like object.
    // The first argument, String(num), is the string representation of num (e.g., "1234").
    // The second argument, Number, is a mapping function that applies Number to each character in the string. This function converts each character back into a number.
    const array = Array.from(String(num), Number);
    console.log(array);
    return array.reduce((accu, curElement) => {
      return accu + curElement;
    });
  };
  console.log(sumOfDigits6(12345));