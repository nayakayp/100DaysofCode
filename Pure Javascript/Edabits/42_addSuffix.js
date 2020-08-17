function add_suffix(suffix) {
  return (word) => word + suffix;
}

add_ly = add_suffix("ly");
add_less = add_suffix("less");
add_ing = add_suffix("ing");

console.log(add_ly("hopeless"), "hopelessly");
console.log(add_ly("total"), "totally");

console.log(add_less("fear"), "fearless");
console.log(add_less("ruth"), "ruthless");

console.log(add_ing("cheer"), "cheering");
console.log(add_ing("book"), "booking");
