//====================================================================================================================================================================================
// -  Write a function called checkTriangle Type that takes three parameters representing the length of the sides of the trangle
// - the function should return a string indicating the type of triangle (equlateral) or scalene
//====================================================================================================================================================================================

// if all the three sides are equal length return equilateral
// if only two sides are equal length return isoscaelable 
// if all three side have different length return scalene


const checkTriangle =  (a, b, c) =>{
    if(a===b && b===c) return "equilateral";
    if(a===b || b === c || a === c) return "isosceles";
    return "scalene"
}


console.log(checkTriangle(3,3,3));
console.log(checkTriangle(6, 5,6));
console.log(checkTriangle(5,4,8

))