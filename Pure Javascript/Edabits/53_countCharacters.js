function countCharacters(arr) {
  return arr.join("").split("").length;
}

console.log(countCharacters(["###", "###", "###"]), 9);

console.log(countCharacters(["22222222", "22222222"]), 16);

console.log(countCharacters(["------------------"]), 18);

console.log(countCharacters([]), 0);
console.log(countCharacters(["", ""]), 0);
