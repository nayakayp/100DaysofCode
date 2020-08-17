// MY SOLUTION
function getExtension(arr) {
  return arr.map((array) =>
    array.slice(array.split("").lastIndexOf(".") + 1, array.split("").length)
  );
}

// BEST SOLUTION
return arr.map((x) => x.split(".").pop());

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]), [
  "jpg",
  "pdf",
  "mp3",
]);
console.log(
  getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]),
  ["rb", "cpp", "py", "js"]
);
console.log(getExtension(["code.html", "code.css"]), ["html", "css"]);
console.log(
  getExtension(["minesweeper.java", "game.java", "my_project.java"]),
  ["java", "java", "java"]
);
