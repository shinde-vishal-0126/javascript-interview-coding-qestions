//====================================================================================================================================================================================
//  # Hash Tag Generator

// - implement to function generateHash that generated a hashtag form the give input string
// - the input string should be converted to a hash tag format where each word is capetalized and concatenated togather without space
// - it the length of the input string is grater then 280 character of if the input string is empty or contain only whitespace should return a false
// - the function should return the generated hash tag prefixed with #
//====================================================================================================================================================================================

const generateHah = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  // convert Given string into the array of string to perform operation
  str = str.split(" ");
  console.log(str);
  // here first we need to iterate the array of string using map method
  str = str.map((element, index, array) => {
    // here replace method used to replace first latter into uppercase latter
    return element.replace(element[0], element[0].toUpperCase());

  });
  str = `#${str.join("")}`;
  console.log(str);
  return str;
};

console.log(generateHah("my name is vishal")); // #MyNameIsVishal

// ============================================================================================================================================================

// approach 2nd

const GenerateHash1 = (str) =>{
  if(str.trim().length === 0 || str.length > 280){
    return false
  }
  str = str.split(" ");
 str = str.map((ele)=>{
    return ele.charAt(0).toUpperCase() + ele.slice(1)
  });
  str = `#${str.join("")}`
  console.log(str);
  return str;
  
}
   
console.log(GenerateHash1("my name is vishal")); // #MyNameIsVishal  