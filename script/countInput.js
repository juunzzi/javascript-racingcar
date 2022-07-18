import { startGame } from "./game.js";
import { deleteRaceLogInGameField } from "./deleteLogic.js";

const prepareGame = () => {
  const CAR_NAME_INPUT = document.querySelector("#car-name__input");
  const GAME_COUNT_INPUT = document.querySelector("#game-count__input");

  const IS_VALID = isValidInputValueOfGameCount(GAME_COUNT_INPUT.value);

  if (IS_VALID) {
    const ok = confirm(`${GAME_COUNT_INPUT.value}번의 게임을 돌리겠는가?`);
    if (ok) {
      deleteRaceLogInGameField();
      startGame(
        CAR_NAME_INPUT.value.split(",").length,
        Number(GAME_COUNT_INPUT.value)
      );
    }
  }
};

const isValidInputValueOfGameCount = (gameCount) => {
  if (gameCount <= 0) {
    alert("정상적인 수를 입력해 줘.");
    return false;
  }
  if (gameCount > 20) {
    alert("20번 이하의 게임만 진행할 수 있어.");
    return false;
  }
  return true;
};

(function () {
  const GAME_COUNT_BUTTON = document.querySelector(".game-count__button");

  GAME_COUNT_BUTTON.addEventListener("click", prepareGame);
})();
