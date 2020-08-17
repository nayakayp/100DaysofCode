function replaceVowels(str, ch) {
  let newArr = [];
  myString = str.split("");
  myFilters = myString.forEach((element) => {
    if (
      element == "a" ||
      element == "i" ||
      element == "u" ||
      element == "e" ||
      element == "o"
    ) {
      newArr.push(ch);
    } else {
      newArr.push(element);
    }
  });
  return newArr.join("");
}

console.log(replaceVowels("the aardvark", "#"), "th# ##rdv#rk");
console.log(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?");
console.log(replaceVowels("shakespeare", "*"), "sh*k*sp**r*");
console.log(
  replaceVowels("all is fair in love and war", "<"),
  "<ll <s f<<r <n l<v< <nd w<r"
);
