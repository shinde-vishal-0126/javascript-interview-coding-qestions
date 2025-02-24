//# Write a function called checkTriangle Type that takes three parameters representing the length of the sides of the tangle
//  the function should return a string indicating the type of triangle (equilateral) or scalene


// if all the three sides are equal length return equilateral
// if only two sides are equal length return isoscaelable 
// if all three side have different length return scalene\\



function checkTriangleType(a,b,c){
    if(a ===b && b ===c){
        return `equilateral triangle`
    }
    else if(a===b || b===c || a ===c){
        return `isosceles triangle`
    }
    else{
        return "scalene"
    }
}

console.log(checkTriangleType(3,3,3));
// console.log(checkTriangleType(6, 5,6));
// console.log(checkTriangleType(5,4)) 