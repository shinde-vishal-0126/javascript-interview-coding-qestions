//====================================================================================================================================================================================
// count occurrences of given  character: in string:a 
// - write a function counter that tack two parameter a string and a character to count the function should return the number of times the specified character appear in string
// - the function should be case-sensitive
// - the function should handled both lowercase and uppercase
//====================================================================================================================================================================================

// 1 approach using reduce method:

const charCount = (word, char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase();

    // again we need to convert into array
    totalCount = word.split("").reduce((accu, curElement)=>{
        if(curElement === char){
            accu++
        }
        return accu
    },0)

    console.log(totalCount);
    
}
charCount('vishal shinde', 's')

// ========================================================================================================================================================================

//  2 approach using split() method 

const charCount1 = (word, char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase();
    console.log(word.split(" "))
    // Here you have to split based on character then it split into present character + 1 and if you want actual count then -1 form the length
    return word.split(char).length-1
}

console.log(charCount1('vishal shinde', 's'));

// ========================================================================================================================================================================

// 3 approach using for loop

const charCount2 = (word,char) =>{
    let count =0
    word = word.toLowerCase();
    char = char.toLowerCase();

    for(let i =0;i<word.length; i++){
        if(word[i] === char){
            count ++
        }
    }
    return count;
}
console.log(charCount2('vishal shinde', 's'))


