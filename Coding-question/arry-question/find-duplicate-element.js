// # 1. find the duplicate element form an array

let arr = [4, 5, 6, 7, 4, 6, , 4, 2, 5, , 8];


// in set and unique value empty slat return as undefined .

// 1
// if you have any value multiple time then you have to used set to uniquely identify the each value.
const duplicate = [
  ...new Set(
    arr.filter((ele, index, arr) => {
      return arr.indexOf(ele) !== index;
    })
  ),
];
console.log(duplicate);

// # 2 remove the duplicate element form the given array

// # 1
let duplicate1 = [...new Set(arr)];
console.log("duplicate 1", duplicate1);

//# 2
const duplicate2 = arr.filter((ele, index, arr) => {
  return arr.indexOf(ele) === index;
});
console.log(duplicate2);

// # 3 used reduce method :

const duplicate3 = arr.reduce((acc, ele) => {
  if (!acc.includes(ele)) {
    acc.push(ele);
  }
  return acc;
}, []);
console.log(duplicate3);


// # 4
let uniqueValue = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueValue.includes(arr[i])) {
    uniqueValue.push(arr[i]);
  }
  // return uniqueValue;
}
console.log("uniqueValue", uniqueValue);
