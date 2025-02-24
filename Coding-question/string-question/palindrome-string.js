
// # find given string is palindrome or not ?

let str = 'madam';
function findPalindrome(str){
    let originalString = str;
    let reverse = '';
    for(let i = str.length-1;i >=0; i--){
        reverse = reverse + str[i];
    }
    if(reverse === originalString){
        return `${reverse} is palindrome string`
    }else{
        return `${reverse} is not palindrome string`
    }
}
console.log(findPalindrome(str))


// # using inbuilt method 

const findPalindrome2 = (str) =>{
    let originalStr = str;
    let reverse = str.split('').reverse().join("");
    if(reverse === originalStr){
        return `given str is palindrome`
    }else{
        return ` given str is not palindrome`
    }
}
console.log(findPalindrome2(str))



// # using length property 

const findPalindrome4 = (str) =>{
    let length = str.length;
    for(let i=0; i < length/2 ; i++){
        if(str[i] !== str[length -1-i]){
            return false
        }
    }
    return true

}
console.log(findPalindrome4(str))
