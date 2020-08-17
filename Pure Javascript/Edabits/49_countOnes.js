function countOnes(i) {
  return i
    .toString(2)
    .split("")
    .filter((number) => number == 1).length;
}

console.log(countOnes(12), 2);
console.log(countOnes(0), 0);
console.log(countOnes(100), 3);
console.log(countOnes(101), 4);
console.log(countOnes(999), 8);
console.log(countOnes(1e9), 13);
console.log(countOnes(123456789), 16);
console.log(countOnes(1234567890), 12);
