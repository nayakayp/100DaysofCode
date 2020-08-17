function triangle(n) {
  let result = 0;
  for (let i = 0; i <= n; i = i + 1) {
    result += i;
  }
  return result;
}

console.log(triangle(1), 1);
console.log(triangle(2), 3);
console.log(triangle(3), 6);
console.log(triangle(8), 36);
console.log(triangle(2153), 2318781);
