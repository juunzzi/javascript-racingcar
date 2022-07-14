const carNameInput = document.querySelector("#car-name__input");
const carNameBtn = document.querySelector(".car-name__button");

const gameInputContainer = document.querySelector("#game-count");

const gameActionContainer = document.querySelector(".game-action-container");

const getGameInput = () => {
  const carNameArray = carNameInput.value.split(",");
  const isValid = isValidInputValueOfCarName(carNameArray);

  if (isValid) {
    gameInputContainer.classList.remove("visible__hidden");
    deleteCarNameList();
    setCarNameList(carNameArray);
  }
  if (!isValid) {
    gameInputContainer.classList.add("visible__hidden");
    deleteCarNameList();
  }
};

const setCarNameList = (carNameArray) => {
  carNameArray.map((name, ind) => {
    const singleCarRacingLog = document.createElement("div");
    singleCarRacingLog.innerHTML = name;

    singleCarRacingLog.classList.add("car-name__ul");

    singleCarRacingLog.setAttribute("id", ind);

    gameActionContainer.appendChild(singleCarRacingLog);
  });
};

const deleteCarNameList = () => {
  while (gameActionContainer.hasChildNodes()) {
    gameActionContainer.removeChild(gameActionContainer.firstChild);
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

carNameBtn.addEventListener("click", getGameInput);
