function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    let endIndex = word.length - 1 - startIndex;
    // if the letters match, return true
    if (word[startIndex] === word[endIndex]) {
      return true}
    else { 
      return false;}
  } 
}

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
  the function isPalindrome take one argument which is a string and check if it is a palindrome firtst we iterate to the middle 
  of the string from both sides startindex iterate from the left side of the word starting from 0 and we create endIdex that iterate
  from the rigth side and we idecate it's index according to the startIndex in such when startIndex is in the first character
  the endIndex is in the last one and they move accordingly then we add an if statment if the first letter is not equal to the 
  last one return false and keep iterating until the middle of the word but they all equals we have a palindrome and the funciton
  will return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;