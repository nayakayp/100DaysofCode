function duplicateEncode(word) {
  const theObj = {};
  let finalArr = [];
  let splitArr = word.toLowerCase().split("");
  for (array of splitArr) {
    theObj[array] = 0;
  }
  for (array of splitArr) {
    theObj[array] += 1;
  }
  for (array of splitArr) {
    theObj[array] > 1 ? finalArr.push(")") : finalArr.push("(");
  }
  return finalArr.join("");
}
console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");
