
// write a function called findMode that take an array of numbers as input and return the mode the array
// mode means  the number that appear most frequently

let data = [10,20,30,10,10,10,40,30,30,30,30]

function findMode(arr){
    let mode = null;
    let maxValue = 0;
    let occurrences = {} // to store the occurrences of value

    for(let i = 0 ; i < arr.length ; i++ ){
        // console.log(arr[i])
        if(occurrences[arr[i]]){
        //   console.log(  occurrences[arr[i]])
            occurrences[arr[i]] ++;
        }
        else{
            occurrences[arr[i]] = 1
        }

        if(occurrences[arr[i]] > maxValue){
            maxValue = occurrences[arr[i]]
            console.log(maxValue)
            // mode = maxValue;
            mode = arr[i]
            console.log(mode)
        }
    }
    return mode
    }
   

console.log(findMode(data))



// 0     10	{}	❌ Not found	occurrences[10] = 1	{ 10: 1 }
// 1	20	{ 10: 1 }	❌ Not found	occurrences[20] = 1	{ 10: 1, 20: 1 }
// 2	30	{ 10: 1, 20: 1 }	❌ Not found	occurrences[30] = 1	{ 10: 1, 20: 1, 30: 1 }
// 3	10	{ 10: 1, 20: 1, 30: 1 }	✅ Found (1)	occurrences[10]++	{ 10: 2, 20: 1, 30: 1 }
// 4	10	{ 10: 2, 20: 1, 30: 1 }	✅ Found (2)	occurrences[10]++	{ 10: 3, 20: 1, 30: 1 }
// 5	10	{ 10: 3, 20: 1, 30: 1 }	✅ Found (3)	occurrences[10]++	{ 10: 4, 20: 1, 30: 1 }
// 6	40	{ 10: 4, 20: 1, 30: 1 }	❌ Not found	occurrences[40] = 1	{ 10: 4, 20: 1, 30: 1, 40: 1 }
// 7	30	{ 10: 4, 20: 1, 30: 1, 40: 1 }	✅ Found (1)	occurrences[30]++	{ 10: 4, 20: 1, 30: 2, 40: 1 }
// 8	30	{ 10: 4, 20: 1, 30: 2, 40: 1 }	✅ Found (2)	occurrences[30]++	{ 10: 4, 20: 1, 30: 3, 40: 1 }
// 9	30	{ 10: 4, 20: 1, 30: 3, 40: 1 }	✅ Found (3)	occurrences[30]++	{ 10: 4, 20: 1, 30: 4, 40: 1 }
// 10	30	{ 10: 4, 20: 1, 30: 4, 40: 1 }	✅ Found (4)	occurrences[30]++	{ 10: 4, 20: 1, 30: 5, 40: 1 }