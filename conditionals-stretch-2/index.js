const magicWord = "Hello";
userWord = prompt("Guess the magic word:");

if (userWord.lower() === magicWord.lower()) {
  alert(`Congratulations!`);
} else {
  alert(`Try again`);
}
