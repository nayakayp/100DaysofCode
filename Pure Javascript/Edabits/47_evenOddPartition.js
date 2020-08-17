function evenOddPartition(arr) {
  oddArr = arr.filter((array) => array % 2 != 0);
  evenArr = arr.filter((array) => array % 2 == 0);
  return [evenArr, oddArr];
}

console.log(evenOddPartition([5, 8, 9, 2, 0]), [
  [8, 2, 0],
  [5, 9],
]);
console.log(evenOddPartition([1, 0, 1, 0, 1, 0]), [
  [0, 0, 0],
  [1, 1, 1],
]);
console.log(evenOddPartition([8, 8, 4, 2]), [[8, 8, 4, 2], []]);
console.log(evenOddPartition([1, 3, 5, 7, 9]), [[], [1, 3, 5, 7, 9]]);
console.log(evenOddPartition([]), [[], []]);
