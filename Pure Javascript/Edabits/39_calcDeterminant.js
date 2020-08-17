function calcDeterminant(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}
// ad-bc
console.log(
  calcDeterminant([
    [1, 2],
    [3, 4],
  ]),
  -2
);

console.log(
  calcDeterminant([
    [5, 3],
    [3, 1],
  ]),
  -4
);

console.log(
  calcDeterminant([
    [1, 1],
    [1, 1],
  ]),
  0
);

console.log(
  calcDeterminant([
    [1, 1],
    [1, 0],
  ]),
  -1
);
