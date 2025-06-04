// Problem: 01 - Write a function called reverseString that takes a string as input and returns the reversed version of that string.

function reverseString(str) {
  let reverse = str.split("").reverse().join("");
  return reverse;
}

console.log(reverseString("mahin"));

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

// Problem: 03 - : Write a function that takes a sentence as input and returns the number of words in that sentence. A word is defined as any group of characters separated by spaces.

function wordCount(sen) {
  let word = sen.trim().split(" ");
  let wordcount = 0;
  for (let i = 0; i < word.length; i++) {
    wordcount++;
  }
  return wordcount;
}

console.log(wordCount("I Love JavaScript"));

// Problem: 04 - Write a function that takes a string and returns the number of vowels ( a , e , i ,o , u ) in it.

function vowelCount(str) {
  let string = str.split("");
  let countVowel = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < string.length; i++) {
    for (let vowel of vowels) {
      if (string[i] === vowel) {
        countVowel++;
      }
    }
  }
  return countVowel;
}

console.log(vowelCount("JavaScript"));

// Problem: 05 - Write a function that checks whether a given string is a palindrome.A palindrome is a word or phrase that reads the same backward as forward

function checkPalindrom(str) {
  let palindrome = str.split("").reverse().join("");
  if (palindrome === str) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrom("madam"));

// Problem: 06 - Write a function called findShortestWord that takes in a string as a parameter and returns the shortest word in the string.

function findShortestWord(str) {
  const word = str.trim().split(/\s+/);
  let shortWord = word[0];
  for (let i = 1; i < word.length; i++) {
    if (word[i].length < shortWord.length) {
      shortWord = word[i];
    }
  }
  return shortWord;
}

console.log(findShortestWord("The quick brown fox jumps over the lazy dog"));
