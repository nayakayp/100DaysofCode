// MY SOLUTION
function testJackpot(result) {
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] != result[j]) {
        return false;
      }
    }
  }
  return true;
}
// BEST SOLUTION
function testJackpot(result) {
  return result.every((x) => x === result[0]);
}

console.log(testJackpot(["@", "@", "@", "@"]), true);
console.log(testJackpot(["!", "!", "!", "!"]), true);
console.log(testJackpot(["abc", "abc", "abc", "abc"]), true);
console.log(testJackpot(["karaoke", "karaoke", "karaoke", "karaoke"]), true);
console.log(testJackpot(["SS", "SS", "SS", "SS"]), true);
console.log(testJackpot([":(", ":)", ":|", ":|"]), false);
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]), false);
console.log(testJackpot(["hee", "heh", "heh", "heh"]), false);
console.log(testJackpot(["SS", "SS", "SS", "Ss"]), false);
console.log(testJackpot(["SS", "SS", "Ss", "Ss"]), false);
