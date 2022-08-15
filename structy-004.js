// Write a function, isPrime, that takes in a number as an argument. The function should 
// return a boolean indicating whether or not the given number is prime.


const isPrime = (n) => {
    if (n < 2) return false;
  
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) return false;
    }
  
  return true;
};

console.log(isPrime(713));


