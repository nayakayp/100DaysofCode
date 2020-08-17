function smallerNum(n1, n2) {
  return String(Math.min(Number(n1), Number(n2)));
}

console.log(smallerNum("21", "44"), "21");
console.log(smallerNum("153", "367"), "153");
console.log(smallerNum("1500", "16"), "16");
console.log(smallerNum("100", "23"), "23");
console.log(smallerNum("1500", "1"), "1");
console.log(smallerNum("5", "5"), "5");
