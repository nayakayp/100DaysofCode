function squareDigits(n) {
  n = String(n);
  let array = n.split("");
  newArray = array.map((arr) => arr * arr);
  return Number(newArray.join(""));
}

console.log(squareDigits(9119), 811181);
console.log(squareDigits(8726), 6449436);
console.log(squareDigits(9763), 8149369);
console.log(squareDigits(2230), 4490);
console.log(squareDigits(2797), 4498149);
console.log(squareDigits(233), 499);
console.log(squareDigits(7437), 4916949);
console.log(squareDigits(2483), 416649);
console.log(squareDigits(5742), 2549164);
console.log(squareDigits(5636), 2536936);
console.log(squareDigits(841), 64161);

// let n = 9119;
// let string = String(n);
// console.log(string);
