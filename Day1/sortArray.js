//====================================================================================================================================================================================
// Sort an Array:
//====================================================================================================================================================================================

// write function to sort an array of number in acceding and descending order 

// - The number should take an array of numbers as input
// - it should return a new array with the numbers sored in ascending order
// - The original array should remains unchanged 
// - you are not allowed to used build in sort() method

const sortArray = (arr) =>{
    // it sort acceding order
    // return arr.sort();

    // if you want to sort in Descending order then used following way
    return arr.sort((a,b)=>{
        return b - a
    })
// sor() method are work on the asci code so be carefully when you work with string 
// for example you have to give 10 it return 10 first in acceding order.

}
console.log(sortArray([3,1,4,2,8,5,6]))

// =======================================================================================================

// sort() using without built in method:

const sortWithoutBuilt= (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(sortWithoutBuilt([64, 34, 25, 12, 22, 11, 90]));


// Initial Array
// Array: [64, 34, 25, 12, 22, 11, 90]

// Pass 1 (First Iteration of Outer Loop)
// In the first pass, the algorithm will compare each adjacent pair of elements and swap if needed. The largest element will "bubble up" to the end.

// Compare 64 and 34: 64 > 34, so we swap. Array: [34, 64, 25, 12, 22, 11, 90]

// Compare 64 and 25: 64 > 25, so we swap. Array: [34, 25, 64, 12, 22, 11, 90]

// Compare 64 and 12: 64 > 12, so we swap. Array: [34, 25, 12, 64, 22, 11, 90]

// Compare 64 and 22: 64 > 22, so we swap. Array: [34, 25, 12, 22, 64, 11, 90]

// Compare 64 and 11: 64 > 11, so we swap. Array: [34, 25, 12, 22, 11, 64, 90]

// Compare 64 and 90: 64 < 90, no swap.

// After the first pass, the largest number, 90, is at the end.

// Pass 2 (Second Iteration of Outer Loop)
// The second pass will bubble up the second-largest element to the second-to-last position.

// Compare 34 and 25: 34 > 25, so we swap. Array: [25, 34, 12, 22, 11, 64, 90]

// Compare 34 and 12: 34 > 12, so we swap. Array: [25, 12, 34, 22, 11, 64, 90]

// Compare 34 and 22: 34 > 22, so we swap. Array: [25, 12, 22, 34, 11, 64, 90]

// Compare 34 and 11: 34 > 11, so we swap. Array: [25, 12, 22, 11, 34, 64, 90]

// Compare 34 and 64: 34 < 64, no swap.

// After the second pass, the second-largest number, 64, is in place.

// Pass 3 (Third Iteration of Outer Loop)
// Compare 25 and 12: 25 > 12, so we swap. Array: [12, 25, 22, 11, 34, 64, 90]

// Compare 25 and 22: 25 > 22, so we swap. Array: [12, 22, 25, 11, 34, 64, 90]

// Compare 25 and 11: 25 > 11, so we swap. Array: [12, 22, 11, 25, 34, 64, 90]

// Compare 25 and 34: 25 < 34, no swap.

// Now, the third-largest number, 34, is in its correct position.

// Pass 4 (Fourth Iteration of Outer Loop)
// Compare 12 and 22: 12 < 22, no swap.

// Compare 22 and 11: 22 > 11, so we swap. Array: [12, 11, 22, 25, 34, 64, 90]

// Compare 22 and 25: 22 < 25, no swap.

// At this point, the array is starting to look sorted, with larger numbers gradually moving to the end.

// Final Passes
// The algorithm will continue in this way until the array is fully sorted: Result: [11, 12, 22, 25, 34, 64, 90]

