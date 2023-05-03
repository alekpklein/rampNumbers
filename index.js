const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let rampCount = 0;

const rampNumbers = (num) => {
  num = parseInt(num);
  for (let i = 0; i < num; i++) {
    let isRamp = true;
    let rampArray = i.toString().split("");

    for (let j = 0; j < rampArray.length; j++) {
      if (rampArray[j] > rampArray[j + 1]) {
        isRamp = false;
      }
    }
    if (isRamp) {
      rampCount++;
    }
  }
  console.log(rampCount);
};

// console.log(rampNumbers(99));
// rampNumbers(99999)

const getPrompt = () => {
  rl.question("Enter a number: ", (answer) => {
    rampNumbers(answer);
    getPrompt();
  });
};
getPrompt();
