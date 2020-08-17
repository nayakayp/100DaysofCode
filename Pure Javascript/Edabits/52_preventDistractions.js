function preventDistractions(str) {
  return str.includes("anime")
    ? "NO!"
    : str.includes("meme")
    ? "NO!"
    : str.includes("vines")
    ? "NO!"
    : str.includes("roasts")
    ? "NO!"
    : str.includes("Danny DeVito")
    ? "NO!"
    : "Safe watching!";
}

console.log(preventDistractions("vines that butter my eggroll"), "NO!");
console.log(preventDistractions("Hot pictures of Danny DeVito"), "NO!");
console.log(
  preventDistractions("top 10 insert random yt celebrity roasts"),
  "NO!"
);
console.log(preventDistractions("best anime food ever!"), "NO!");
console.log(
  preventDistractions("How to Be a Productive Member of Society"),
  "Safe watching!"
);
