// for (let counter = 1; counter <= 20; counter++) {
//   const name = "Floofer";
//   console.log(`${name} ${counter}`);
// }

const luckyNumber = 20;
let userNumber = 0;
userNumber = prompt(`Guess a number`);
while (userNumber != luckyNumber) {
  if (userNumber != luckyNumber) {
    userNumber = prompt(`Nope - try again! Guess a number`);
  }
}
alert("Winner!");
