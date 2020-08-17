function isFirstSuperior(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      count++;
    }
  }
}

console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]), true);
console.log(isFirstSuperior(["a", "b", "c"], ["a", "d", "c"]), false);
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]), false);
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "ant"]), true);
console.log(
  isFirstSuperior([true, true, false, true], [true, true, true, true]),
  false
);
console.log(isFirstSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]), true);
console.log(
  isFirstSuperior(["llama", "alligator"], ["llama", "buffalo"]),
  false
);
console.log(
  isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]),
  true
);
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]), false);
