// What is the difference between a parameter and an //argument? 
// a parameter is a variable in a method definition, when a method is called the arguments are the data you pass into the parameters.
// parameter is variable in the declaration of function. argument is the actual value of the variable that gets passed to function.
// Within a function, what is the difference between return and console.log?
// return is a statement that allows a function to output a value back to where it was called.
// console.log is a function that prints out a value in the console to inspect.

const checkPalindrome = (string) => {
    const palindrome = string.toLowerCase().split("").reverse().join("")
    if(palindrome === string.toLowerCase()) {
        return true
    }
    return false
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
///////////////////////////////////////////////////
const sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
////////////////////////////////////////////////////
const checkPrime = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(checkPrime(19));

const printPrimes = (primeNum) => {
    for(let i = 0; i <= primeNum; i++) {
        if(checkPrime(i)) {
            console.log(i)
        }
    }
}

console.log(printPrimes(97));