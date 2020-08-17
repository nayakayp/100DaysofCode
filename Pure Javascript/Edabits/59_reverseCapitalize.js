function reverseCapitalize(str) {
  return str.split("").reverse().join("").toUpperCase();
}
console.log(reverseCapitalize("edabit"), "TIBADE");
console.log(reverseCapitalize("abc"), "CBA");
console.log(reverseCapitalize("hellothere"), "EREHTOLLEH");
console.log(reverseCapitalize("input"), "TUPNI");
console.log(reverseCapitalize("indubitably"), "YLBATIBUDNI");
