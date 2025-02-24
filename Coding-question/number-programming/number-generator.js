//# write a function called numberRange that Generate an array containing consecutive number from the a to z (inclusive)

function generateNumber(start, end){
    let array = [];
    for(let i = start;i<= end ; i++){
        array.push(i)
    }
    return array;
}
console.log(generateNumber(10,99))
console.log(generateNumber(-9,9))

//# write a recursive function called numberRangeRecursive that Generate an array containing consecutive numbers from a to b

const makeNumberGenerator = (arr = []) => {
  function GenerateNumber(start, end) {
    if (start > end) {
      return arr;
    }
    arr.push(start);
    return GenerateNumber(start + 1, end);
  }
  return GenerateNumber(10, 99);
};
console.log(makeNumberGenerator());



// # also used following approach 

const GenerateNumber  = (num1, num2,arr= [])=>{
    if(num1 <= num2 ){
        arr.push(num1);
        return GenerateNumber(num1+1, num2,arr)
    }
    return arr;
}
console.log(GenerateNumber(10,88))