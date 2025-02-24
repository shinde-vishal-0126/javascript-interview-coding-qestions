// # check the number of occurrences of a given char in string

let str = "vishal shinde hi vishu wwww www www";
let count = 0;
function findOccurrences(str, char) {
  let newString = str.split("");
  // console.log(newString);
  for (let i = 0; i < newString.length; i++) {

    if(newString[i] === char){
        count ++
    }

    // 2nd way
    // if (newString[i].includes(char)) {
    //   count++;
    // }
  }
  return count;
}
console.log(findOccurrences(str, "v"));


// # using the reduce method :

function findOccurrences1(str, char){
    let arr = str.split('');
    console.log("arr", arr)
    const count = arr.reduce((acc, element)=>{
        if(element=== char){
            acc ++;
        }
        return acc
    },0)
    return count;
}

console.log(findOccurrences1(str, 'v'))

// # using split method 


function findOccurrences4(str, char){
    let arr = str.split(char).length-1;
    return arr
}
console.log(findOccurrences4(str, 'w'))