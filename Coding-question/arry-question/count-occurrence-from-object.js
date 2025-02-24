// # count the occurrences of the gender with boy 

let people = [
    { "name": "Alice", "gender": "girl" },
    { "name": "Bob", "gender": "boy" },
    { "name": "Emma", "gender": "girl" },
    { "name": "Liam", "gender": "boy" },
    { "name": "Sophia", "gender": "girl" },
    { "name": "Noah", "gender": "boy" },
    { "name": "Olivia", "gender": "girl" },
    { "name": "Ethan", "gender": "boy" }
  ]
  

  function findOccurrences(people){
    let result = {};
    for(let key of people){
        if(result[key.gender]){
            result[key.gender] ++;
        }
        else{
            result[key.gender] = 1
        }
    } 
    return result 
  }

  console.log(findOccurrences(people))


  // # using the reduce method 

  function findOccurrences2(people){
    const occurrences = people.reduce((accu, curEle)=>{
        accu[curEle.gender] = accu[curEle.gender] ? accu[curEle.gender] + 1: 1;
        return accu
    },{})
    return occurrences
  }
  console.log(findOccurrences2(people))