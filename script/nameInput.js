import {
  deleteCarNameInGameField,
  deleteRaceLogInGameField,
} from "./deleteLogic.js";

const getGameInput = () => {
  const CAR_NAME_INPUT = document.querySelector("#car-name__input");
  const GAME_INPUT_CONTAINER = document.querySelector("#game-count");

  const CAR_NAME_ARRAY = CAR_NAME_INPUT.value.split(",");
  const IS_VALID = isValidInputValueOfCarName(CAR_NAME_ARRAY);

  if (IS_VALID) {
    GAME_INPUT_CONTAINER.classList.remove("visible__hidden");
    deleteCarNameInGameField();
    deleteRaceLogInGameField();
    setCarNameList(CAR_NAME_ARRAY);
  }
  if (!IS_VALID) {
    GAME_INPUT_CONTAINER.classList.add("visible__hidden");
    deleteCarNameInGameField();
    deleteRaceLogInGameField();
  }
};

const setCarNameList = (carNameArray) => {
  const CAR_NAME_CONTAINER = document.querySelector(".race-car-container");

  carNameArray.map((name, ind) => {
    const SINGLE_RACE_LOG = document.createElement("div");

    SINGLE_RACE_LOG.innerHTML = name;

    SINGLE_RACE_LOG.classList.add("car-name__li");
    SINGLE_RACE_LOG.setAttribute("id", ind);

    CAR_NAME_CONTAINER.appendChild(SINGLE_RACE_LOG);
  });
};

const isValidInputValueOfCarName = (carNameArray) => {
  const NAME_ARRAY_LENGTH = carNameArray.length;
  const DUP_CAR_NAME_ARRAY = new Set(carNameArray);

  // 개수
  if (NAME_ARRAY_LENGTH <= 1) {
    alert("혼자서는 경기를 할 수 없어.");
    return false;
  }
  if (NAME_ARRAY_LENGTH > 5) {
    alert("5개보다 적은 수의 차를 입력해줘.");
    return false;
  }

  // 이름 길이
  for (let i = 0; i < NAME_ARRAY_LENGTH; i++) {
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
  if (carNameArray.length !== DUP_CAR_NAME_ARRAY.size) {
    alert("중복되는 이름이 존재해.");
    return false;
  }

  return true;
};

(function () {
  const CAR_NAME_BUTTON = document.querySelector(".car-name__button");

  CAR_NAME_BUTTON.addEventListener("click", getGameInput);
})();
