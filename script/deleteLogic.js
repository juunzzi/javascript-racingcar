export const deleteAll = () => {
  deleteCarNameInput();
  deleteGameCountInput();
  deleteCarNameInGameField();
  deleteRaceLogInGameField();
};

export const deleteCarNameInput = () => {
  const CAR_NAME_INPUT = document.querySelector("#car-name__input");

  CAR_NAME_INPUT.value = "";
};

export const deleteGameCountInput = () => {
  const GAME_COUNT_INPUT = document.querySelector("#game-count__input");
  GAME_COUNT_INPUT.value = "";

  const GAME_INPUT_CONTAINER = document.querySelector("#game-count");
  GAME_INPUT_CONTAINER.classList.add("visible__hidden");
};

export const deleteCarNameInGameField = () => {
  const CAR_NAME_CONTAINER = document.querySelector(".race-car-container");

  while (CAR_NAME_CONTAINER.hasChildNodes()) {
    CAR_NAME_CONTAINER.removeChild(CAR_NAME_CONTAINER.firstChild);
  }
};

export const deleteRaceLogInGameField = () => {
  const RACE_LOG_CONTAINER = document.querySelector(".race-log-container");
  while (RACE_LOG_CONTAINER.hasChildNodes()) {
    RACE_LOG_CONTAINER.removeChild(RACE_LOG_CONTAINER.firstChild);
  }

  const WINNER_NAME = document.querySelector(".race-winner");
  WINNER_NAME.innerHTML = "";
  if (!WINNER_NAME.classList.value.includes("visible__hidden")) {
    WINNER_NAME.classList.add("visible__hidden");
  }

  const RESTART_BUTTON = document.querySelector(".race-restart__button");
  if (!RESTART_BUTTON.classList.value.includes("visible__hidden")) {
    RESTART_BUTTON.classList.add("visible__hidden");
  }
};
