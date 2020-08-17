function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
}

console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"), true);
console.log(
  hasKey({ craves: true, midnight: true, snack: true }, "morning"),
  false
);
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"), false);
console.log(hasKey({ a: "z", b: "y", c: "x" }, "c"), true);
