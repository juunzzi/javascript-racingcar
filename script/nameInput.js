const getGameInput = () => {
  const carNameInput = document.querySelector("#car-name__input");
  const gameInputContainer = document.querySelector("#game-count");

  const carNameArray = carNameInput.value.split(",");
  const isValid = isValidInputValueOfCarName(carNameArray);

  if (isValid) {
    gameInputContainer.classList.remove("visible__hidden");
    deleteGame();
    setCarNameList(carNameArray);
  }
  if (!isValid) {
    gameInputContainer.classList.add("visible__hidden");
    deleteGame();
  }
};

const setCarNameList = (carNameArray) => {
  const carNameContainer = document.querySelector(".race-car-container");

  carNameArray.map((name, ind) => {
    const singleCarRacingLog = document.createElement("div");

    singleCarRacingLog.innerHTML = name;

    singleCarRacingLog.classList.add("car-name__li");
    singleCarRacingLog.setAttribute("id", ind);

    carNameContainer.appendChild(singleCarRacingLog);
  });
};

export const deleteGame = () => {
  deleteCarName();
  deleteRaceLog();
};

export const deleteAllInfo = () => {
  deleteCarName();
  deleteRaceLog();
  makeInitialInputStatus();
};

const makeInitialInputStatus = () => {
  const carNameInput = document.querySelector("#car-name__input");
  const gameCountInput = document.querySelector("#game-count__input");

  carNameInput.value = "";
  gameCountInput.value = "";

  const gameInputContainer = document.querySelector("#game-count");

  gameInputContainer.classList.add("visible__hidden");
};

const deleteCarName = () => {
  const carNameContainer = document.querySelector(".race-car-container");

  while (carNameContainer.hasChildNodes()) {
    carNameContainer.removeChild(carNameContainer.firstChild);
  }
};

export const deleteRaceLog = () => {
  const raceLogContainer = document.querySelector(".race-log-container");

  while (raceLogContainer.hasChildNodes()) {
    raceLogContainer.removeChild(raceLogContainer.firstChild);
  }

  const winnerName = document.querySelector(".race-winner");
  const restartButton = document.querySelector(".race-restart__button");

  if (!winnerName.classList.value.includes("visible__hidden")) {
    winnerName.classList.add("visible__hidden");
  }
  if (!restartButton.classList.value.includes("visible__hidden")) {
    restartButton.classList.add("visible__hidden");
  }
};

const isValidInputValueOfCarName = (carNameArray) => {
  const nameArrayLength = carNameArray.length;
  const dupArray = new Set(carNameArray);

  // 개수
  if (nameArrayLength <= 1) {
    alert("혼자서는 경기를 할 수 없어.");
    return false;
  }
  if (nameArrayLength > 5) {
    alert("5개보다 적은 수의 차를 입력해줘.");
    return false;
  }

  // 이름 길이
  for (let i = 0; i < nameArrayLength; i++) {
    if (carNameArray[i].length > 5) {
      alert(`${i + 1}번째 차 이름 확인해줘. 이름은 5글자 이내로 작성해야 해.`);
      return false;
    }
    if (carNameArray[i].length === 0) {
      alert(`${i + 1}번째 차 이름 확인해줘. 차 이름이 존재해야 해.`);
      return false;
    }
  }

  // 중복 확인
  if (carNameArray.length !== dupArray.size) {
    alert("중복되는 이름이 존재해.");
    return false;
  }

  return true;
};

(function () {
  const carNameBtn = document.querySelector(".car-name__button");

  carNameBtn.addEventListener("click", getGameInput);
})();
