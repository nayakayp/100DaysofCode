function last(a, n) {
  return n > a.length ? "invalid" : n == 0 ? [] : a.slice(-n);
}

console.log(last([1, 2, 3, 4, 5], 0), []);
console.log(last([1, 2, 3, 4, 5], 1), [5]);
console.log(last([4, 3, 9, 9, 7, 6], 3), [9, 7, 6]);
console.log(last([5, 1, 2], 3), [5, 1, 2]);
console.log(last([], 1), "invalid");
console.log(last([1, 2, 3, 4, 5], 7), "invalid");
