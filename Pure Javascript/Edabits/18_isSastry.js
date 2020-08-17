function isSastry(number) {
  return Number.isInteger(
    Math.sqrt(Number(String(number) + String(number + 1)))
  );
}

console.log(isSastry(183), true);
console.log(isSastry(184), false);
console.log(isSastry(106755), true);
console.log(isSastry(129987253440921), false);
console.log(isSastry(157175907513603), true);
console.log(isSastry(206611570247935), true);
console.log(isSastry(338752188230098), false);
console.log(isSastry(433610247875715), true);
console.log(isSastry(652333983478884), false);
console.log(isSastry(718717107443715), true);
console.log(isSastry(752199872453889), false);
console.log(isSastry(786704531939448), true);
