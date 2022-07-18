import { deleteAll } from "./deleteLogic.js";

export const startGame = (carNum, gameNum) => {
  setField(carNum);

  const EACH_RACE_LOG = document.querySelectorAll(".race-log-personal");
  const ADVANCED_COUNT = [];
  for (let i = 0; i < EACH_RACE_LOG.length; i++) {
    ADVANCED_COUNT[i] = 0;
  }

  let gameCount = 0;

  let term = setInterval(function () {
    if (gameCount < gameNum) {
      EACH_RACE_LOG.forEach((log, index) => {
        loader(log);
        insertValue(log, ADVANCED_COUNT, index);
      });
    }
    if (gameCount >= gameNum) {
      clearInterval(term);
      findWinner(ADVANCED_COUNT, gameNum);
    }
    gameCount++;
  }, 1000);
};

const findWinner = (numberOfAdvancedLog, gameNum) => {
  const WINNER_NAME = document.querySelector(".race-winner");
  const CAR_NAME_CONTAINER = document.querySelector(".race-car-container");

  const WINNER_LIST = [];
  const PLAYER_LIST = [];
  for (let k = 0; k < CAR_NAME_CONTAINER.children.length; k++) {
    PLAYER_LIST[k] = CAR_NAME_CONTAINER.children[k].innerHTML;
  }

  // 우승자 만족 조건
  for (let i = 0; i < numberOfAdvancedLog.length; i++) {
    if (numberOfAdvancedLog[i] >= Math.ceil(gameNum / 2)) {
      WINNER_LIST[i] = true;
    }
    if (
      numberOfAdvancedLog[i] === 0 ||
      numberOfAdvancedLog[i] < Math.ceil(gameNum / 1.5)
    ) {
      WINNER_LIST[i] = false;
    }
  }

  // 우승자 출력
  WINNER_NAME.classList.remove("visible__hidden");
  WINNER_NAME.innerHTML = "";
  WINNER_NAME.innerHTML += `🏆 최종 우승자 : ${PLAYER_LIST.map((v, i) => {
    if (WINNER_LIST[i] === true) {
      return v;
    }
  }).join(" ")} 🏆`;

  // 게임 종료 후 로직
  endGame();
};

const endGame = () => {
  const RESTART_BUTTON = document.querySelector(".race-restart__button");
  RESTART_BUTTON.classList.remove("visible__hidden");

  RESTART_BUTTON.addEventListener("click", deleteAll);
};

const setField = (carNum) => {
  const RACE_LOG = document.querySelector(".race-log-container");

  for (let i = 0; i < carNum; i++) {
    const personalZone = document.createElement("div");
    personalZone.classList.add("race-log-personal");

    RACE_LOG.appendChild(personalZone);
  }
};

const loader = (component) => {
  const SPINNER = document.createElement("div");
  const INNER_SPINNER = document.createElement("i");

  SPINNER.classList.add("spinner");
  INNER_SPINNER.classList.add("fas", "fa-spinner", "fa-lg", "fa-spin", "shot");

  SPINNER.appendChild(INNER_SPINNER);
  component.appendChild(SPINNER);

  setTimeout(() => {
    SPINNER.remove();
  }, 500);
};

const insertValue = (component, numberOfAdvancedLog, index) => {
  const ADVANCED_LOG = document.createElement("span");

  if (canMove()) {
    numberOfAdvancedLog[index]++;
    ADVANCED_LOG.classList.add("race-log-icon");
    ADVANCED_LOG.innerHTML = "🏎";
  }

  setTimeout(() => {
    component.appendChild(ADVANCED_LOG);
  }, 500);
};

const canMove = () => {
  const RANDOM_VALUE = Math.floor(10 * Math.random());

  if (RANDOM_VALUE >= 4) {
    return true;
  }
  if (RANDOM_VALUE < 4) {
    return false;
  }
};
