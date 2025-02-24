// # check given number is palindrome number or not

let num = 121;

const findPalindrome = (num) => {
  let reverse = 0;
  let originalNum = num;
  while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (originalNum === reverse) {
    return " Given no is palindrome number";
  } else {
    return " given number is not palindrome number";
  }
};
console.log(findPalindrome(num));


// # using inbuilt method to find the given number is palindrome or not

const findPalindrome2 = (num) => {
  let reverse;
  let originalNum = num;
  let arrOfString = num.toString().split("");
  reverse = arrOfString.reverse().join("");

  if (originalNum === parseInt(reverse)) {
    return " palindrome number ";
  } else {
    return "not palindrome number";
  }
};
console.log(findPalindrome2(num));


// # third approach using the length property 
const findPalindrome3 = (num)=>{
    let arrayString = num.toString().split("");
    let length = arrayString.length;
    for(let i =0 ;i< length/2; i++){
        if(arrayString[i] !== arrayString[length-1 -i]){
            return ' not palindrome string'
        }
    }
    return 'given string is palindrome'
}
console.log(findPalindrome3(num))





// # write a function to find the give number is palindrome number or not using recursive approach ?

function findPalindrome4(num){
    let str = num.toString();
    function CheckPalindrome ( start, end){
        if(start >= end){
            return true
        }
        if(str[start] !== str[end]){
            return false;
        }
     return  CheckPalindrome(start+1, end-1)
    }
   return  CheckPalindrome(0, str.length-1) 
}
console.log(findPalindrome4(num))