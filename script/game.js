import { deleteAllInfo } from "./nameInput.js";

export const startGame = (carNum, gameNum) => {
  setField(carNum);

  const eachRaceLog = document.querySelectorAll(".race-log-personal");
  const numberOfAdvancedLog = [];
  for (let i = 0; i < eachRaceLog.length; i++) {
    numberOfAdvancedLog[i] = 0;
  }

  let gameCount = 0;

  let term = setInterval(function () {
    if (gameCount < gameNum) {
      eachRaceLog.forEach((log, index) => {
        loader(log);
        insertValue(log, numberOfAdvancedLog, index);
      });
    }
    if (gameCount >= gameNum) {
      clearInterval(term);
      findWinner(numberOfAdvancedLog);
    }
    gameCount++;
  }, 1000);
};

const findWinner = (numberOfAdvancedLog) => {
  const winner = document.querySelector(".race-winner");
  winner.classList.remove("visible__hidden");

  // console.log(Math.max(...numberOfAdvancedLog));

  endGame();
};

const endGame = () => {
  const restartButton = document.querySelector(".race-restart__button");
  restartButton.classList.remove("visible__hidden");

  restartButton.addEventListener("click", deleteAllInfo);
};

const setField = (carNum) => {
  const raceLog = document.querySelector(".race-log-container");

  for (let i = 0; i < carNum; i++) {
    const personalZone = document.createElement("div");
    personalZone.classList.add("race-log-personal");

    raceLog.appendChild(personalZone);
  }
};

const loader = (component) => {
  const spinner = document.createElement("div");
  const innerSpinner = document.createElement("i");

  spinner.classList.add("spinner");
  innerSpinner.classList.add("fas", "fa-spinner", "fa-lg", "fa-spin", "shot");

  spinner.appendChild(innerSpinner);
  component.appendChild(spinner);

  setTimeout(() => {
    spinner.remove();
  }, 500);
};

const insertValue = (component, numberOfAdvancedLog, index) => {
  const advanceLog = document.createElement("span");

  if (canMove()) {
    numberOfAdvancedLog[index]++;
    advanceLog.classList.add("race-log-icon");
    advanceLog.innerHTML = "🏎";
  }

  setTimeout(() => {
    component.appendChild(advanceLog);
  }, 500);
};

const canMove = () => {
  const RandomValue = Math.floor(10 * Math.random());

  if (RandomValue >= 4) {
    return true;
  }
  if (RandomValue < 4) {
    return false;
  }
};
