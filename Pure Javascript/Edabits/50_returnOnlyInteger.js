function returnOnlyInteger(arr) {
  return arr.filter((number) => Number.isInteger(number));
}

console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]), [9, 2, 16]);
console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]), [
  81,
  123,
]);
console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]), [
  10,
  56,
  20,
  3,
]);
console.log(returnOnlyInteger(["String", true, 3.3, 1]), [1]);
