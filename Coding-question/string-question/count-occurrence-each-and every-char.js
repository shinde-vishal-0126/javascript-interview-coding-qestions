
// # count occurrences of each and every char
// write a function to get the occurrences of each and every char in give string

let str = 'hi my name is vishal shinde at post wadgaon sahani tal junnar dist pune ui hi hi '

function findOccurrences(str){
    let occurrences = {}
    let arr = str.split("");
    // console.log(arr);
    // for(let i =0; i< arr.length;i++){
        
    // }

    for(let char of arr){
        if(char === ' ') continue;
        // Initial Setup
        // Before we start iterating, the object occurrences is empty.

        //Step 2: Processing Each Character
        // Processing 'h'
        // occurrences['h'] does not exist, so it's undefined.
        // undefined || 0 results in 0.
        //  0 + 1 = 1.
        //  Now, we update occurrences:


        occurrences[char] = (occurrences[char] || 0)+1
        
        // if(occurrences[char]){
           
        //     occurrences[char] ++ ;
        // }
        // else{
        //     occurrences[char] = 1
        // }
    }
    return occurrences;
}

console.log(findOccurrences(str))



// # using reduce method 


function findOccurrences1 (str){
    let arr = str.split("");
    return arr.reduce ((acc,ele)=>{
        acc[ele] = acc[ele] ? acc[ele] + 1 : 1
        return acc;
    },{})
}
console.log(findOccurrences1(str))


// # 
 function findOccurrences5(str){
    let map = new Map();
    for(let char of str){
        // console.log(char)
        if(map.has(char)){
            map.set(char, map.get(char) + 1)
        }
        else{
            map.set(char, 1)
        }
    }
    return Object.fromEntries( map)
 }
 console.log(findOccurrences5(str))