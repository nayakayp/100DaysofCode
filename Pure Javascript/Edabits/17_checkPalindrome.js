function checkPalindrome(str) {
  return str == str.split("").reverse().join("") ? true : false;
}

console.log(checkPalindrome("mom"), true);
console.log(checkPalindrome("scary"), false);
console.log(checkPalindrome("reviver"), true);
console.log(checkPalindrome("stressed"), false);
console.log(checkPalindrome("good"), false);
console.log(checkPalindrome("refer"), true);
console.log(checkPalindrome("something"), false);
console.log(checkPalindrome("redder"), true);
console.log(checkPalindrome("civic"), true);
