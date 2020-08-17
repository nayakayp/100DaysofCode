function intWithinBounds(n, lower, upper) {
  return Number.isInteger(n) ? n >= lower && n < upper : false;
}

console.log(intWithinBounds(3, 1, 9), true);
console.log(intWithinBounds(6, 1, 6), false);
console.log(intWithinBounds(4.5, 3, 8), false);
console.log(intWithinBounds(-5, -10, 6), true);
console.log(intWithinBounds(4, 0, 0), false);
console.log(intWithinBounds(10, 9, 11), true);
console.log(intWithinBounds(6.3, 2, 6), false);
console.log(intWithinBounds(6.3, 2, 10), false);
console.log(intWithinBounds(9, 2, 3), false);
console.log(intWithinBounds(9, 9, 9), false);
console.log(intWithinBounds(-3, -5, -2), true);
console.log(intWithinBounds(-3, -5, -3), false);
console.log(intWithinBounds(-3, -10, 10), true);
console.log(intWithinBounds(0, -3, 3), true);
console.log(intWithinBounds(0, 0, 1), true);
console.log(intWithinBounds(7, 7, 12), true);
