function repeat(item, times) {
  const newArr = [];
  for (let i = 0; i < times; i++) {
    newArr.push(item);
  }
  return newArr;
}

console.log(repeat("edabit", 3), ["edabit", "edabit", "edabit"]);
console.log(repeat(13, 5), [13, 13, 13, 13, 13]);
console.log(repeat("7", 2), ["7", "7"]);
console.log(repeat("2 0 1 8", 1), ["2 0 1 8"]);
console.log(repeat("tom dick and harry", 6), [
  "tom dick and harry",
  "tom dick and harry",
  "tom dick and harry",
  "tom dick and harry",
  "tom dick and harry",
  "tom dick and harry",
]);
console.log(repeat(0, 1), [0]);
console.log(repeat(0, 0), []);
console.log(repeat("z", 0), []);
