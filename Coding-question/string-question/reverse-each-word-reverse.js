// write a function to reverser string in the following way
// "draw tpircsavaj eht mrof olleh"
// let input = 'hello form the javascript word';

let input = "hello form the javascript word";
let str = "vishal shinde at post wadgaon sahani";
//output should be : sahani noagdaw tsop ta ednihs lahsiv

function reverseEachWord(str) {
  str = str.split("").reverse().join("");
  console.log(str);
}
console.log(reverseEachWord(str));

// # without using inbuilt method

function reverse(word1) {
  let reversed = ""; // Initialize an empty string for reversed word
  for (let i = word1.length - 1; i >= 0; i--) {
    reversed += word1[i]; // Append characters in reverse order
  }
  return reversed; // Return the reversed word
}

function reverseEachWord1(str) {
  let word = ""; // To store the current word
  let words = []; // Array to store reversed words

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // If we encounter a space
      if (word !== "") {
        words.push(reverse(word)); // Reverse and store the word
      }
      word = ""; // Reset for next word
    } else {
      word += str[i]; // Build the word
    }
  }

  // Push the last word after the loop
  if (word !== "") {
    words.push(reverse(word));
  }

  let reverse1 = ''; // Store the final result
  for (let i = words.length - 1; i >= 0; i--) {
      reverse1 += words[i]; // Add reversed words
      if (i !== 0) {
          reverse1 += ' '; // Add space between words
      }
  }

  return reverse1;
}


console.log("using not inbuilt method", reverseEachWord1(str));
