// MY SOLUTION
function duplicateCount(text) {
  let textLower = text.toLowerCase();
  let myObj = {};
  let counter = 0;
  for (text of textLower) {
    myObj[text] = 0;
  }
  for (text of textLower) {
    myObj[text] += 1;
  }
  for (const [key, value] of Object.entries(myObj)) {
    if (value > 1) counter++;
  }
  return counter;
}

// BEST SOLUTION
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);
