// Problem: 01 - Write a function called reverseString that takes a string as input and returns the reversed version of that string.

function reverseString(str){
    let reverse = str.split('').reverse().join('')
    return reverse
}

let result = reverseString("mahin")
console.log(result);