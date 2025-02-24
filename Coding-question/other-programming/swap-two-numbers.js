//  # swap the give two numbers

let a = 10;
let b = 30;

// # using third variable

let temp = a;
a = b;
b = temp;

console.log(a, b);

//  # without using third variable
a = a * b;
b = a / b;
a = a / b;

console.log(a, b);


// # without using third variable 

a = a+b;
b = a-b;
a = a-b;
console.log(a, b)


// # bitwise xor operator 

a = a^ b;
b = a^ b;
a = a^b;
console.log(a, b)