const answer = 0;

let userAnswer = Number(prompt(`Guess a number`));

if (userAnswer < answer) {
  alert(`Your guess was too low.`);
} else if (userAnswer === answer) {
  alert(`Right on!`);
} else if (userAnswer > answer) {
  alert(`Your guess was too high.`);
} else {
  alert(`Try entering a number next time.`);
}
