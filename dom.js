const rampNumbers = (num) => {
  num = document.getElementById('input').value;
  let rampCount = 0;
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
  document.getElementById('output').innerHTML = rampCount;
  return rampCount;
};


