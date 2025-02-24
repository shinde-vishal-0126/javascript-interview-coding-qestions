//? Hash Tag Generator
//| - implement to function generateHash that generated a hashtag form the give input string
//  the input string should be converted to a hash tag format where each word is capitalized and concatenated together without space
//  it the length of the input string is grater then 280 character of if the input string is empty or contain only whitespace should return a false
//  the function should return the generated hash tag prefixed with #

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

// using charAt() method

function HashTagGenerator(str) {
  // Check if string is empty or too long
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  // Convert string into an array of words
  let words = str.split(" ");

  // Capitalize each word
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join words and add the hashtag symbol
  return "#" + capitalizedWords.join("");
}

console.log(HashTagGenerator("hello world from javascript")); // #HelloWorldFromJavascript
