// #  how to fined prime number in javascript
// prime number are those which are divide by one or itself
//  ex. 2,3,5, 7, 11,13
//  prime no of -ve numbers are not possible
// A prime number must have exactly two divisors. (Thus, 1 is neither prime nor composite.)

let num = 2;

function isPrime(num) {
  if (num < 2) {
    return `${num} is not prime number`;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not prime number`;
    }
  }
  return `${num} is prime number`;
}

console.log(isPrime(num));



// # find prime number between the n to 100
let limit = 100;

function isPrime(num) {
    if (num < 2) return false; // Numbers < 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible, it's not prime
    }
    return true; // If no divisors are found, it's prime
}

function getPrimesInRange(start, limit) {
    let primes = [];
    for (let i = start; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i); // Collect prime numbers
        }
    }
    return primes;
}

let start = 10; // Change this to any number to find primes from that number
console.log(getPrimesInRange(start, limit));
