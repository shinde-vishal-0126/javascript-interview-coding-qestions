
//# find the longest word in the give string.
// # write a function findLongestWord that takes a string as input and return the largest word in the string if there are multiple longest word return first one encountered.
// using sort method 



let hi = 'Hi my name is vishal shinde at post junnar'
function findLongestWord(str){
    let longestWord;
    let arr = hi.split(' ');
    const result = arr.sort((a,b)=>{
      return  b.length - a.length
    })
    
     longestWord = result.at(0);
     return longestWord

}
console.log(findLongestWord(hi))


// using reduce method

function findLongest(str){
    let arr = str.split(" ").sort();
    let result = arr.reduce((acc, curEle)=>{
        return  acc.length > curEle ? acc : curEle
    })
    console.log(result)
}
findLongest(hi)


// using for loop 

function findLongestWord1(str){
    let longestWord = ''; 
    let arr = str.split(" ")
    for(let i=0;i< arr.length;i++){
        if(arr[i].length > longestWord){
            longestWord = arr[i]
        }
    }
    return longestWord;
}

console.log("-----------",findLongestWord(hi))