const wordCount = document.querySelector(".word-count");
const charCount = document.querySelector(".char-count");
const text = document.querySelector("#text");
text.addEventListener("keyup", printCount);

function printCount() {
  if (!text.value) {
    wordCount.innerHTML = 0;
    charCount.innerHTML = 0;
    return;
  }
  wordCount.innerHTML = getWordCount(text.value);
  charCount.innerHTML = getCharCount(text.value);
}

function getCharCount(text) {
  return text.split("").length;
}
function getWordCount(text) {
  return text.split(" ").filter((word) => word !== "" && word.length > 1)
    .length;
}
