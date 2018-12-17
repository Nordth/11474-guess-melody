import {createElmt, screenChange} from './util.js';
import welcomeScreen from './welcome.js';

const element = createElmt(`<div id="result-success">
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
    <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>
</div>`);

const replayButton = element.querySelector(`.result__replay`);

replayButton.addEventListener(`click`, () => {
    screenChange(welcomeScreen);
});

export default element;
