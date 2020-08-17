function abcmath(a, b, c) {
  let result;
  for (let i = 0; i < b; i++) {
    result = a + a;
    a = result;
  }
  return Number.isInteger(result / c);
}

console.log(abcmath(1, 2, 3), false);
console.log(abcmath(69, 15, 9), false);
console.log(abcmath(9, 2, 52), false);
console.log(abcmath(5, 2, 3), false);
console.log(abcmath(5, 2, 1), true);
console.log(abcmath(261, 2, 1), true);
console.log(abcmath(22, 2, 22), true);
console.log(abcmath(69, 12, 3), true);
