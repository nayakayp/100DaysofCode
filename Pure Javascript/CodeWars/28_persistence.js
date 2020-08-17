function persistence(num) {
  let counter = 0;
  while (String(num).length > 1) {
    let numbArr = String(num).split("");
    num = numbArr.reduce(
      (accumulator, currentValue) => Number(accumulator) * Number(currentValue)
    );
    counter++;
  }
  return counter;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
