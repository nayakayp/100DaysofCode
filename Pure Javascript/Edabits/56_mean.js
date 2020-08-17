function mean(num) {
  return (
    String(num)
      .split("")
      .reduce(
        (accumulator, currentValue) =>
          Number(accumulator) + Number(currentValue)
      ) / String(num).split("").length
  );
}

console.log(mean(666), 6);
console.log(mean(80), 4);
console.log(mean(789), 8);
console.log(mean(417), 4);
console.log(mean(1357), 4);
console.log(mean(42), 3);
console.log(mean(12345), 3);
