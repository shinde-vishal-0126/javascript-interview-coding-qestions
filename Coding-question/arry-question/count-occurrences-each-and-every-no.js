

//# write a function to count the occurrences of each and every number in the give array

let data = [10,20,30,10,10,10,40,30,30,30,30]

function CountOccurrences(arr){
    let occurrences = {};
    for(let i=0; i < arr.length; i++){
        console.log(arr[i])

        if(occurrences[arr[i]]){
            console.log('hi',occurrences[arr[i]])
            occurrences[arr[i]] ++;
        }
        else{
            occurrences[arr[i]]  = 1
        }
    }
    return occurrences
}
console.log(CountOccurrences(data))


// # using reduce method 

function CountOccurrences1(arr){
  const occurrences = arr.reduce((accu, curElement)=>{
     accu[curElement] = accu[curElement] ? accu[curElement] + 1 : 1
     return accu;
  },{})
//   console.log("occurrences", occurrences)
return occurrences;
}
console.log(CountOccurrences1(data))


// # using map method 

function CountOccurrences2(arr){
    let occurrences = new Map();
    for(let no of arr){
        if(occurrences.has(no)){
            occurrences.set(no, occurrences.get(no) + 1)
        }else{
            occurrences.set(no, 1)
        }
    }
    return occurrences
    // return Object.fromEntries(occurrences)
}
console.log('333',CountOccurrences2(data))
