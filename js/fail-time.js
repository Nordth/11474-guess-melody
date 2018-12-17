import {createElmt, screenChange} from './util.js';
import welcomeScreen from './welcome.js';

const element = createElmt(`<div id="fail-time">
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>
</div>`);

const replayButton = element.querySelector(`.result__replay`);

replayButton.addEventListener(`click`, () => {
    screenChange(welcomeScreen);
});

export default element;
