// MY SOLUTION
var uniqueInOrder = function (iterable) {
  if (iterable.length == 0) {
    return [];
  } else if (typeof iterable == "object") {
    var splitArr = iterable.join("").split("");
  } else {
    var splitArr = String(iterable).split("");
  }
  const finalArr = [];
  const objArr = [];
  for (let i = 0; i < splitArr.length; i++) {
    for (j = i + 1; j < splitArr.length; j++) {
      if (splitArr[i] != splitArr[j]) {
        if (typeof iterable == "object") {
          if (typeof iterable[0] == "number") {
            finalArr.push(Number(splitArr[i]));
            i = j - 1;
            break;
          }
          if (typeof iterable[0] == "string") {
            finalArr.push(String(splitArr[i]));
            i = j - 1;
            break;
          }
        } else {
          finalArr.push(splitArr[i]);
          i = j - 1;
          break;
        }
      }
    }
  }
  if (typeof iterable[0] == "number") {
    finalArr.push(Number(splitArr[splitArr.length - 1]));
  } else {
    finalArr.push(splitArr[splitArr.length - 1]);
  }

  return finalArr;
};

// BEST SOLUTION
function uniqueInOrder(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]); //YES
console.log(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]); //YES
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]); //NO
console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]); //YES
console.log(uniqueInOrder([]), []); //YE
console.log(uniqueInOrder("A"), ["A"]); //YES
console.log(uniqueInOrder("AA"), ["A"]); //YES
console.log(uniqueInOrder(["a", "b", "b"]), [["a", "b"]]); //NO

const testArr = [1, 2, 3];

console.log(typeof testArr[0]);
