// Problem: 01 - Write a function called reverseString that takes a string as input and returns the reversed version of that string.

function reverseString(str) {
  let reverse = str.split("").reverse().join("");
  return reverse;
}

let result1 = reverseString("mahin");
console.log(result1);

// Problem: 02 - Write a function called fizzBuzz that prints numbers from 1 to n .
// But for multiples of:
// 3, print "Fizz" instead of the number.
// 5, print "Buzz" instead of the number.
// Both 3 and 5, print "FizzBuzz" .

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " = " + "FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i + " = " + "Fizz");
    } else if (i % 5 === 0) {
      console.log(i + " = " + "Buzz");
    }
  }
}

fizzBuzz(100);
