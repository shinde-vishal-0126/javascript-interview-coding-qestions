// # how to  find the vowel form the give string

// # find the count the number of vowel are present
let str = "vishal shinde";
let vowel1 = "aioue";
const countOfVowels = (str) => {
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (vowel1.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(countOfVowels(str));

// # used match method

const vowel = (str) => {
  const matches = str.match(/[aioueAIEOU]/g);
  return matches ? matches.length : 0;
};
console.log(vowel(str));

//# using reduce method
const countVowels1 = (str) => {
  let arr = str.split("");
  console.log(arr);
  return arr.reduce((acc, ele) => {
    return vowel1.includes(ele) ? acc + 1 : acc;
  }, 0);
};
console.log(countVowels1(str));


// # 