// # how to reverse the give string

let str = "vishal shinde";

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i > 0; i--) {
    console.log(str[i]);
    reverse = reverse + str[i];
  }
  return reverse;
}
console.log(reverseString(str));

// # using reduce method

const reverseString1 = (str) => {
  return str.split("").reduce((previousEle, cureEle) => {
    return cureEle + previousEle;
  }, "");
};
console.log(reverseString1(str));

//# using inbuilt method

const reverse1 = str.split("").reverse().join("");
console.log("reverse one ", reverse1);
