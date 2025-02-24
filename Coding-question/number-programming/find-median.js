
// write a function to findMedian(arr) that take an array of numbers as input and return the median value.if the array has an even number of element return the average of the two middle value
// rules:sort the array before finding the median
// if the array is empty return null
// if the array has only one element return that element
// if the array has an odd number of elements return the middle value
// if the array has an even number of elements return the average of the two middle values

// Example: findMedian([1,2,3,4,5]) => 3
// Example: findMedian([1,2,3,4,5,6]) => 3.5
// Example: findMedian([1]) => 1
// Example: findMedian([]) => null

function findMedian(arr) {
    if (arr.length === 0) return null; // Handle empty array
    if (arr.length === 1) return arr[0]; // Handle single-element array
  
    // Sort a copy of the array to avoid mutating the original
    const data = [...arr].sort((a, b) => a - b);
  
    const length = data.length;
    const mid = Math.floor(length / 2);
    
  
    // Calculate median
    if (length % 2 === 0) {
      return (data[mid] + data[mid - 1]) / 2; // Average of middle two values
    } else {
      return data[mid]; // Middle value for odd-length array
    }
  }
  console.log(findMedian([5,3,4,1,2]))
  console.log(findMedian([5,3,4,1]))