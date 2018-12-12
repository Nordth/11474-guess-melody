"use strict";
// ФУНКЦИИ
// функция получения номера текущего экрана
const currentScreen = () => {
  const curScreen = document.getElementById(`main`).getAttribute(`data-screen`);
  return curScreen;
};
// обработчик нажатия стрелок "влево"/"вправо" на клавиатуре
const keyPress = (e) => {
  switch (e.keyCode) {
    case 37: // нажата стрелка  "влево"
      screenChange(-1);
      break;
    case 39: // нажата стрелка "вправо"
      screenChange(1);
      break;
  }
};
// функция смены экранов
const screenChange = (direction) => {
  const curScreen = Number(currentScreen());
  const number = curScreen + Number(direction);
  const viewScreen = document.getElementById(`main`);

  if (number >= 0 && number <= arrScreenTemplates.length) {
    viewScreen.innerHTML = ``;
    viewScreen.appendChild(arrScreenTemplates[number].content.cloneNode(true));
    document.getElementById(`main`).setAttribute(`data-screen`, number);
  }
};


// ОСНОВНОЕ
// добавление визуальных стрелок навигации со стилями
const arrowsWrap = document.createElement(`div`);
const arrowsHtml = `
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>`;

arrowsWrap.classList.add(`arrows__wrap`);
arrowsWrap.innerHTML = arrowsHtml;
document.getElementById(`app`).appendChild(arrowsWrap);


// обработчик клика по кнопкам навигации
arrowsWrap.onclick = () => {
  const target = event.target;
  const button = target.closest(`button`);
  if (!button) {
    return;
  }
  const action = button.innerHTML;
  switch (action) {
    case `&lt;-`: // нажата стрелка  "влево"
      screenChange(-1);
      break;
    case `-&gt;`:// нажата стрелка "вправо"
      screenChange(1);
      break;
  }
};

// собираем массив шаблонов экрана
const tags = document.getElementsByTagName(`template`);
const arrScreenTemplates = [];
Array.from(tags).forEach((it) => {
  arrScreenTemplates.push(it);
});

// приветственный экран
screenChange(0);

// обработчик на document - переключение экранов стрелками влево/вправо
document.addEventListener(`keydown`, keyPress);
