import { startGame } from "./game.js";
import { deleteRaceLog } from "./nameInput.js";

const prepareGame = () => {
  const carNameInput = document.querySelector("#car-name__input");
  const gameCountInput = document.querySelector("#game-count__input");

  const isValid = isValidInputValueOfGameCount(gameCountInput.value);

  if (isValid) {
    const ok = confirm(`${gameCountInput.value}번의 게임을 돌리겠는가?`);
    if (ok) {
      deleteRaceLog();
      startGame(
        carNameInput.value.split(",").length,
        Number(gameCountInput.value)
      );
    }
  }
};

const isValidInputValueOfGameCount = (gameCount) => {
  if (gameCount <= 0) {
    alert("정상적인 수를 입력해줄래? ㅠ");
    return false;
  }
  if (gameCount > 20) {
    alert("20번 이하의 게임만 진행할 수 있어.");
    return false;
  }
  return true;
};

(function () {
  const gameCountBtn = document.querySelector(".game-count__button");

  gameCountBtn.addEventListener("click", prepareGame);
})();
