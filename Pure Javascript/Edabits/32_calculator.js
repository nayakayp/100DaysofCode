function calculator(num1, operator, num2) {
  return eval("num1" + operator + "num2") != Infinity
    ? eval("num1" + operator + "num2")
    : "Can't divide by 0!";
}

console.log(calculator(2, "/", 2), 1);
console.log(calculator(10, "-", 7), 3);
console.log(calculator(2, "*", 16), 32);
console.log(calculator(2, "-", 2), 0);
console.log(calculator(15, "+", 26), 41);
console.log(calculator(2, "+", 2), 4);
console.log(calculator(2, "/", 0), "Can't divide by 0!");
