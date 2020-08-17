// MY SOLUTION
function highestDigit(number) {
  let listNum = String(number)
    .split("")
    .map((digit) => Number(digit))
    .sort();
  return listNum[listNum.length - 1];
}

// BEST SOLUTION
const highestDigit = (number) => {
  return Math.max(...[...String(number)].map(Number));
};
console.log(highestDigit(51), 5);
console.log(highestDigit(0), 0);
console.log(highestDigit(7495037), 9);
console.log(highestDigit(222222), 2);
