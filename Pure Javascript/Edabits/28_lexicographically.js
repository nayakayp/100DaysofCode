function firstAndLast(s) {
  return [s.split("").sort().join(""), s.split("").sort().reverse().join("")];
}

console.log(firstAndLast("marmite"), ["aeimmrt", "trmmiea"]);
console.log(firstAndLast("bench"), ["bcehn", "nhecb"]);
console.log(firstAndLast("scoop"), ["coops", "spooc"]);
console.log(firstAndLast("fanatic"), ["aacfint", "tnifcaa"]);
