//====================================================================================================================================================================================
// # find the longest word in the give string.
// write a function findLongestWord that takes a string as input and return the largest word in the string if ther are multiple longest word return first one encountered.
//====================================================================================================================================================================================

// solution 1:

// defined function:
const findLongestWord = (str) => {
  // - first we need to verify given string are not empty or does not having the whitespace:
  if (str.trim().length === 0) {
    return false;
  }

  // to compare string we need to convert string into array
  const word = str.split(" ");
  console.log(word);

  // - you have to convert string into array then sort() the array of string using sort() metod
  // - IMP : about sort() method:
  // - sort() method are work on unCode system and capital lattes unicode are available first (so sort() method work on unicode system)

  // in sort() method you have to pass callback function with 2 argument for the compare the given array
  const words = word.sort((a, b) => {
    // return a.length - b.length; // it return in acceding order
    // - if you want descending order then used following way
    return b.length - a.length;
  });

  console.log(words); // return result based on the sort() method
  // use the .at(-1) method on strings to access characters by index, including negative indexing, which allows you to retrieve characters starting from the end of the string.
  return word.at(0); //
  //   also done using
  // return word [0]
};

// call function
console.log(findLongestWord("Hi my name is vishal shinde at post junnar"));

// ================================================================================================================================================================================

// solution 2:

// defined function:
const findLongestWord1 = (str) => {
  // - first we need to verify given string are not empty or does not having the whitespace:
  if (str.trim().length === 0) {
    return false;
  }
  // to compare string we need to convert string into array
  const word = str.split(" ");
  console.log(word);
  // - you have to convert string into array then sort() the array of string using sort() metod
  // - IMP : about sort() method:
  // - sort() method are work on unCode system and capital lattes unicode are available first (so sort() method work on unicode system)

  // in sort() method you have to pass callback function with 2 argument for the compare the given array
  const words = word.sort((a, b) => {
    // return a.length - b.length; // it return in acceding order
    // - if you want descending order then used following way
    return b.length - a.length;
  });

  // 2nd approach using reduce method :
  return words.reduce((accumulator, currentValue) => {
    return accumulator.length > currentValue.length
      ? accumulator
      : currentValue;
  });
};

// call function
console.log(findLongestWord1("Hi my name is vishal shinde at post junnar"));
