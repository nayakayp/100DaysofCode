// MY SOLUTION
function boxSeq(step) {
  let result = 0;
  for (let i = 1; i <= step; i++) {
    i % 2 == 0 ? result-- : (result += 3);
  }
  return result;
}
// BEST SOLUTION
const boxSeq = (step) => (step % 2 === 0 ? step : step + 2);

console.log(boxSeq(5), 7);
console.log(boxSeq(0), 0);
console.log(boxSeq(6), 6);
console.log(boxSeq(99), 101);
console.log(boxSeq(2), 2);
console.log(boxSeq(1), 3);
