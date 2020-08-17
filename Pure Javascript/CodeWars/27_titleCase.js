function titleCase(title, minorWords) {
  if (title == "") {
    return "";
  } else if (minorWords == undefined) {
    let titleSplit = title.split(" ");
    capitalizeArray = titleSplit.map(function (word) {
      let lowerWord = word.toLowerCase();
      let firstWord = lowerWord[0].toUpperCase();
      return firstWord + lowerWord.slice(1);
    });
    return capitalizeArray.join(" ");
  } else {
    let titleSplit = title.split(" ");
    let minorWordsSplit = minorWords.split(" ");
    let finalArr = [];
    capitalizeArray = titleSplit.map(function (word) {
      let lowerWord = word.toLowerCase();
      let firstWord = lowerWord[0].toUpperCase();
      return firstWord + lowerWord.slice(1);
    });
    finalArr[capitalizeArray[0]];
    for (let i = 1; i < capitalizeArray.length; i++) {
      for (let j = 0; j < minorWordsSplit.length; j++) {
        if (
          capitalizeArray[i].toLowerCase() == minorWordsSplit[j].toLowerCase()
        ) {
          capitalizeArray[i] = capitalizeArray[i].toLowerCase();
        }
      }
    }
    return capitalizeArray.join(" ");
  }
}

console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of"), "A Clash of Kings");
console.log(
  titleCase("THE WIND IN THE WILLOWS", "The In"),
  "The Wind in the Willows"
);
console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
