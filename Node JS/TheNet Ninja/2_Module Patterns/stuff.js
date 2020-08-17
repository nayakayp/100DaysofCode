const counter = function (arr) {
  return `There are ${arr.length} elements in this array`;
};

const adder = function (a, b) {
  return `The sum of ${a} and ${b} is ${a + b}`;
};

const pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
