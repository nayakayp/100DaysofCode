// MY SOLUTION
function replaceVowel(word) {
  let newArr = [];
  myString = word.split("");
  myFilters = myString.forEach((element) => {
    element == "a"
      ? newArr.push(1)
      : element == "e"
      ? newArr.push(2)
      : element == "i"
      ? newArr.push(3)
      : element == "o"
      ? newArr.push(4)
      : element == "u"
      ? newArr.push(5)
      : newArr.push(element);
  });
  return newArr.join("");
}

// BEST SOLUTION
function replaceVowel(word) {
  return word.replace(/[aeiou]/g, (v) => "aeiou".indexOf(v) + 1);
}

console.log(replaceVowel("karachi"), "k1r1ch3");
console.log(replaceVowel("dang"), "d1ng");
console.log(replaceVowel("aen"), "12n");
console.log(replaceVowel("chembur"), "ch2mb5r");
console.log(replaceVowel("khandbari"), "kh1ndb1r3");
console.log(replaceVowel("thamel"), "th1m2l");
