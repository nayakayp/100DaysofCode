function changeEnough(change, amountDue) {
  console.log(
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01
  );
  return change[0] * 0.25 +
    change[1] * 0.1 +
    change[2] * 0.05 +
    change[3] * 0.01 <
    amountDue
    ? false
    : true;
}

console.log(changeEnough([2, 100, 0, 0], 14.11), false);
console.log(changeEnough([0, 0, 20, 5], 0.75), true);
console.log(changeEnough([30, 40, 20, 5], 12.55), true);
console.log(changeEnough([10, 0, 0, 50], 13.85), false);
console.log(changeEnough([1, 0, 5, 219], 19.99), false);
console.log(changeEnough([1, 0, 2555, 219], 127.75), true);
console.log(changeEnough([1, 335, 0, 219], 35.21), true);

// quarter: $0.25
// dime:  $0.10
// nickel:  $0.05
// penny:  $0.01
