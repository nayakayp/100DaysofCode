function isLeap(year) {
  return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}

console.log(isLeap(2020), true, "Example #1");
console.log(isLeap(1800), false, "Example #2");
console.log(isLeap(2000), true, "Example #3");
console.log(isLeap(2019), false, "Example #4");
console.log(isLeap(1452), true);
console.log(isLeap(1998), false);
console.log(isLeap(1904), true);
console.log(isLeap(1985), false);
console.log(isLeap(2048), true);
console.log(isLeap(1600), true);
