let t = document.querySelector(".timer");
let startTimer = document.querySelector(".start");
let endTimer = document.querySelector(".end");
let push = false;
let d;
let second = 0;

const addSecond = () => {
  second += 1;
  renderTimer(second);
};

const renderTimer = (second) => {
  t.innerHTML = `<h1> ${second} </h1>`;
};

const timerStop = () => {
  push = true;
  timerClock();
};

const timerStart = () => {
  push = false;
  timerClock();
};

const timerClock = () => {
  console.log(push);
  if (push) {
    clearInterval(d);
  } else {
    d = setInterval(() => {
      addSecond();
    }, 1000);
  }
};

// setTimeout(() => {
//   addSecond();
// }, 1000);

startTimer.addEventListener("click", timerStart);

endTimer.addEventListener("click", timerStop);
