// создание DOM-элемента на основе переданной в виде строки разметки
export const createElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  const element = wrapper.firstChild;
  return element;
};

// функция смены экранов
/* export const changeLevel = (element) => {
  const mainScreen = document.getElementById(`main`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(element);
};
*/

// функция подсчета набранных баллов игрока
export const userPoints = (answersUser, balanceNotes) => {
  if (!Array.isArray(answersUser)) {
    throw new Error(`input format does not match expected`);
  }
  if (balanceNotes === 0) {
    return -1;
  }
  let points = 0;
  let notCurrentlyAnswers = 0;
  const countAnswers = 10;

  if (answersUser.length < countAnswers) {
    return -1; // игрок ответил не на все вопросы
  } else if (answersUser.length > countAnswers) {
    throw new Error(`count answers user > ${countAnswers}`);
  }

  answersUser.forEach((it) => {
    if (it.answerStatus && it.answerTime <= 30) {
      points = points + 2; // быстрый и правильный ответ
    } else if (it.answerStatus && it.answerTime > 30) {
      points++; // правильный, но не быстрый ответ
    }
    if (!it.answerStatus) {
      notCurrentlyAnswers++;
    }
  });
  if (notCurrentlyAnswers > 0) {
    return -1;
  } else {
    return points;
  }
};

// функция вывода результата игрока
export const displayResultGame = (topGamesTable, resultGame) => {
  if (resultGame.times === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (resultGame.notes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  let newTopGamesTable = topGamesTable.slice();
  for (let i = 0; i < topGamesTable.length; i++) {
    if (topGamesTable[i] < resultGame.points && (topGamesTable[i - 1] >= resultGame.points || i === 0)) {
      newTopGamesTable.splice(i, 0, resultGame.points);
      break;
    }
  }
  if (topGamesTable.length === newTopGamesTable.length) {
    newTopGamesTable.push(resultGame.points);
  }

  const number = newTopGamesTable.lastIndexOf(resultGame.points) + 1;
  const count = newTopGamesTable.length;
  const percent = Math.round(((count - number) / count) * 100);
  return `Вы заняли ${number} место из ${count} игроков. Это лучше, чем у ${percent}% игроков`;
};

// функция управления жизнями игрока
export const managmentBalanceNotes = (answerUser, answerTrue, balanceNotes) => {
  if (!Array.isArray(answerUser) || !Array.isArray(answerTrue)) {
    throw new Error(`input format does not match expected`);
  }
  if (answerUser.length === 0 || answerTrue.length === 0) {
    throw new Error(`arg arrays empty`);
  }
  if (balanceNotes === 0) {
    throw new Error(`arg not correct`);
  }
  if (answerUser.length !== answerTrue.length) {
    balanceNotes--;
  } else {
    answerUser = answerUser.sort();
    answerTrue = answerTrue.sort();
    for (let i = 0; i < answerUser.length; i++) {
      if (answerUser[i] !== answerTrue[i]) {
        balanceNotes--;
        break;
      }
    }
  }
  return balanceNotes;
};

// функция переключения уровней
export const changeLevel = (currentQuestion, balanceNotes, timeToEnd, questions) => {
  if (isNaN(currentQuestion) || isNaN(balanceNotes) || isNaN(timeToEnd) || !Array.isArray(questions)) {
    throw new Error(`arguments is not correct`);
  }
  if (questions.length === 0 || questions.length < currentQuestion) {
    throw new Error(`questions empty or is not correct`);
  }
  if (timeToEnd < 0 || Array.isArray(timeToEnd) || currentQuestion <= 0 || Array.isArray(currentQuestion) || balanceNotes < 0 || Array.isArray(balanceNotes)) {
    throw new Error(`timeToEnd is not correct`);
  }

  if (balanceNotes === 0) {
    return [`fail-tries`, 0];
  }
  if (timeToEnd === 0) {
    return [`fail-time`, 0];
  }
  if (questions.length === currentQuestion) {
    return [`result-success`, 0];
  }
  return [questions[currentQuestion].type, currentQuestion + 1];
};

// функция отсчета времения
export const timeCheck = (timeBeginGame, currentTime) => {
  if (isNaN(timeBeginGame) || isNaN(currentTime)) {
    throw new Error(`arguments is not number`);
  }
  if (timeBeginGame <= 0 || currentTime <= 0) {
    throw new Error(`arguments is negative or empty`);
  }
  if (currentTime - timeBeginGame < 0) {
    throw new Error(`current time before time begin`);
  }
  let time = 0;
  let flag = true;
  const timeLimit = 300; // 5 мин
  time = timeLimit - (currentTime - timeBeginGame);
  if (time > 0) {
    flag = false;
  }
  return [time, flag];
};
