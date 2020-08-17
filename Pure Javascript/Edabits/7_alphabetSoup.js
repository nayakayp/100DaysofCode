function AlphabetSoup(str) {
  return str.split("").sort().join("");
}

console.log(AlphabetSoup("hello"), "ehllo");
console.log(AlphabetSoup("edabit"), "abdeit");
console.log(AlphabetSoup("hacker"), "acehkr");
console.log(AlphabetSoup("geek"), "eegk");
console.log(AlphabetSoup("javascript"), "aacijprstv");
console.log(AlphabetSoup("credibility"), "bcdeiiilrty");
console.log(AlphabetSoup("apostrophe"), "aehoopprst");
console.log(AlphabetSoup("determination"), "adeeiimnnortt");
console.log(AlphabetSoup("win"), "inw");
console.log(AlphabetSoup("synthesis"), "ehinsssty");
