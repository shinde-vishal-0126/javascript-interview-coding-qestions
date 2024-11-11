//====================================================================================================================================================================================
// - write a function to determine weather give string is palindrom or not
// - A plindrom is a word, phrase, number or other sequences of character that read the save forwared and backward, ingnoring spaces, punctuation and capitalization
//====================================================================================================================================================================================


// solution 1:

const findPlindrome = (str) =>{
    str = str.toLowerCase();
    const data = str.split("");
  const reverseString = data.reverse().join("");
  if(reverseString === str){
    console.log(`given string is palindrome string ${reverseString}`)
  }else{
    console.log(`given string are not palindrome string ${reverseString}`);
    
  }


}
findPlindrome('madaM')

// solution 2:
// using for loop

const findPlindrome1 = (str) =>{

    const data = str.toLowerCase();
    const data1 = data.split("");
    let reverseString = '';
    for(let i = data1.length-1; i>=0;i--){
        console.log("value of i",data1[i])
        reverseString = reverseString + data1[i];
    }
    console.log(reverseString)
    if(str === reverseString){
        console.log(`given string is palindrome string ${reverseString}`);
    }else{
        console.log(`given string are not palindrome string ${reverseString}`)
    }

}

findPlindrome1('madam')

// ================================================================================================

// solution 3 
const findPlindrome2 = (str) =>{
    str = str.toLowerCase();
    let length = str.length

    for(let i=0;i< length/2;i++){
        if(str[i] !== str[length-1-i]){
            console.log('the string is not a plindrom')
            return
        }
    }
    console.log('the string are palindrome')
}

findPlindrome2('madam')
