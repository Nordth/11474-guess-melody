import {assert} from 'chai';
import {userPoints, displayResultGame, managmentBalanceNotes, changeLevel, timeCheck} from '../util.js';

describe(`player scores test`, () => {
  it(`should return -1 when the player did not have time to answer all the questions, count notes is true`, () => {
    const answersUser = [
      {'answerStatus': true, 'answerTime': 30},
      {'answerStatus': true, 'answerTime': 60},
      {'answerStatus': true, 'answerTime': 60},
      {'answerStatus': true, 'answerTime': 60},
      {'answerStatus': true, 'answerTime': 20},
      {'answerStatus': true, 'answerTime': 60},
    ];
    const balanceNotes = 3;
    assert.equal(-1, userPoints(answersUser, balanceNotes));
  });
  it(`should return 10 when the player answered all the questions slowly and currently, count notes is true`, () => {
    const answersUser = [
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31},
      {'answerStatus': true, 'answerTime': 31}
    ];
    const balanceNotes = 3;
    assert.equal(10, userPoints(answersUser, balanceNotes));
  });
  it(`should return 20 when the player answered all the questions fast and currently,  count notes is true`, () => {
    const answersUser = [
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29}
    ];
    const balanceNotes = 3;
    assert.equal(20, userPoints(answersUser, balanceNotes));
  });
  it(`should return 18 when the player answered all the questions currently and differently, count notes is true`, () => {
    const answersUser = [
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 61},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 41},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29}
    ];
    const balanceNotes = 1;
    assert.equal(18, userPoints(answersUser, balanceNotes));
  });
  it(`should return -1 when the player answered all the questions fast,  count notes is zero`, () => {
    const answersUser = [
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29}
    ];
    const balanceNotes = 0;
    assert.equal(-1, userPoints(answersUser, balanceNotes));
  });
  it(`should return -1 when the player answered all the questions, bat differently not currnetly,  count notes is zero`, () => {
    const answersUser = [
      {'answerStatus': false, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': false, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29}
    ];
    const balanceNotes = 1;
    assert.equal(-1, userPoints(answersUser, balanceNotes));
  });
  it(`should return -1 when the player answered all the questions, bat differently not currnetly,  count notes is zero`, () => {
    const answersUser = [
      {'answerStatus': false, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': false, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29}
    ];
    const balanceNotes = 1;
    assert.equal(-1, userPoints(answersUser, balanceNotes));
  });
  it(`should return -1 when the player did not answer a single question,  count notes is true`, () => {
    const answersUser = [];
    const balanceNotes = 2;
    assert.equal(-1, userPoints(answersUser, balanceNotes));
  });
  it(`should return -1 when the player answered all the questions, bat differently not currnetly,  count notes is zero`, () => {
    const answersUser = [
      {'answerStatus': false, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': false, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29},
      {'answerStatus': true, 'answerTime': 29}
    ];
    const balanceNotes = 1;
    assert.equal(-1, userPoints(answersUser, balanceNotes));
  });
});

describe(`game result test`, () => {
  it(`time is over`, () => {
    const topGamesTable = [20, 18, 16, 14, 12, 10, 8, 7, 6, 4];
    const resultGame = {
      points: 15,
      notes: 2,
      times: 0
    };
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, displayResultGame(topGamesTable, resultGame));
  });
  it(`notes is over`, () => {
    const topGamesTable = [20, 18, 16, 14, 12, 10, 8, 7, 6, 4];
    const resultGame = {
      points: 15,
      notes: 0,
      times: 120
    };
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, displayResultGame(topGamesTable, resultGame));
  });
  it(`game vin 4 place`, () => {
    const topGamesTable = [20, 18, 16, 14, 12, 10, 8, 7, 6];
    const resultGame = {
      points: 15,
      notes: 1,
      times: 50
    };
    assert.equal(`Вы заняли 4 место из 10 игроков. Это лучше, чем у 60% игроков`, displayResultGame(topGamesTable, resultGame));
  });
  it(`game vin 1 place`, () => {
    const topGamesTable = [18, 16, 14, 12, 10];
    const resultGame = {
      points: 20,
      notes: 1,
      times: 50
    };
    assert.equal(`Вы заняли 1 место из 6 игроков. Это лучше, чем у 83% игроков`, displayResultGame(topGamesTable, resultGame));
  });
  it(`game vin last place`, () => {
    const topGamesTable = [20, 18, 16, 14];
    const resultGame = {
      points: 10,
      notes: 1,
      times: 50
    };
    assert.equal(`Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков`, displayResultGame(topGamesTable, resultGame));
  });
  it(`game vin 5 place, the same points`, () => {
    const topGamesTable = [20, 18, 16, 10, 8];
    const resultGame = {
      points: 10,
      notes: 1,
      times: 50
    };
    assert.equal(`Вы заняли 5 место из 6 игроков. Это лучше, чем у 17% игроков`, displayResultGame(topGamesTable, resultGame));
  });
  it(`game vin 1 place, result games table empty`, () => {
    const topGamesTable = [];
    const resultGame = {
      points: 10,
      notes: 1,
      times: 50
    };
    assert.equal(`Вы заняли 1 место из 1 игроков. Это лучше, чем у 0% игроков`, displayResultGame(topGamesTable, resultGame));
  });
});

describe(`managment balance notes test`, () => {
  it(`answer is not correct, balance notes true, notes down`, () => {
    const answerUser = [1];
    const answerTrue = [2];
    const balanceNotes = 3;
    assert.equal(2, managmentBalanceNotes(answerUser, answerTrue, balanceNotes));
  });
  it(`answer correct, balance notes true`, () => {
    const answerUser = [2, 3];
    const answerTrue = [2, 3];
    const balanceNotes = 3;
    assert.equal(3, managmentBalanceNotes(answerUser, answerTrue, balanceNotes));
  });
  it(`answer correct and unsort, balance notes true`, () => {
    const answerUser = [3, 1, 2];
    const answerTrue = [1, 2, 3];
    const balanceNotes = 3;
    assert.equal(3, managmentBalanceNotes(answerUser, answerTrue, balanceNotes));
  });
  it(`balance notes zero, display error`, () => {
    const answerUser = [1, 2, 3];
    const answerTrue = [1, 2, 3];
    const balanceNotes = 0;
    assert.throws(() => {
      managmentBalanceNotes(answerUser, answerTrue, balanceNotes);
    }, Error);
  });
  it(`answer empty array, display error`, () => {
    const answerUser = [];
    const answerTrue = [1];
    const balanceNotes = 3;
    assert.throws(() => {
      managmentBalanceNotes(answerUser, answerTrue, balanceNotes);
    }, Error);
  });
  it(`answer not array, display error`, () => {
    const answerUser = ``;
    const answerTrue = [1];
    const balanceNotes = 3;
    assert.throws(() => {
      managmentBalanceNotes(answerUser, answerTrue, balanceNotes);
    }, Error);
  });
  it(`answer right empty array, display error`, () => {
    const answerUser = [1];
    const answerTrue = [];
    const balanceNotes = 3;
    assert.throws(() => {
      managmentBalanceNotes(answerUser, answerTrue, balanceNotes);
    }, Error);
  });
  it(`answer right not array, display error`, () => {
    const answerUser = [1];
    const answerTrue = 1;
    const balanceNotes = 3;
    assert.throws(() => {
      managmentBalanceNotes(answerUser, answerTrue, balanceNotes);
    }, Error);
  });
});

describe(`change level test`, () => {
  const questions = [
    {type: `game-artist`, question: `Кто исполняет эту песню?`, answer: [`Пелагея`, `КиШ`, `ДДТ`], correctAnswer: [0]},
    {type: `game-artist`, question: `Кто исполняет эту песню?`, answer: [`Ария`, `Кипелов`, `Меладзе`], correctAnswer: [2]},
    {type: `game-genre`, question: `Выберите инди-рок треки`, answer: [`/audio/path1.mp3`, `/audio/path2.mp3`, `/audio/path3.mp3`], correctAnswer: [0, 1]},
    {type: `game-artist`, question: `Кто исполняет эту песню?`, answer: [`Пелагея`, `КиШ`, `ДДТ`], correctAnswer: [1]},
    {type: `game-artist`, question: `Кто исполняет эту песню?`, answer: [`Ария`, `Кипелов`, `Меладзе`], correctAnswer: [0]},
    {type: `game-genre`, question: `Выберите треки в стиле heavy metal`, answer: [`/audio/path1.mp3`, `/audio/path2.mp3`, `/audio/path3.mp3`], correctAnswer: [1, 2]},
    {type: `game-artist`, question: `Кто исполняет эту песню?`, answer: [`Пелагея`, `КиШ`, `ДДТ`], correctAnswer: [2]},
    {type: `game-artist`, question: `Кто исполняет эту песню?`, answer: [`Ария`, `Кипелов`, `Меладзе`], correctAnswer: [2]},
    {type: `game-genre`, question: `Выберите треки в стиле хип-хоп`, answer: [`/audio/path1.mp3`, `/audio/path2.mp3`, `/audio/path3.mp3`], correctAnswer: [1]},
    {type: `game-artist`, question: `Кто исполняет эту песню?`, answer: [`Пелагея`, `КиШ`, `ДДТ`], correctAnswer: [1]},
  ];
  it(`balanse notes true, time true, questions true`, () => {
    const balanceNotes = 3;
    const timeToEnd = 60;
    assert.deepEqual([`game-artist`, 2], changeLevel(1, balanceNotes, timeToEnd, questions));
    assert.deepEqual([`game-genre`, 3], changeLevel(2, balanceNotes, timeToEnd, questions));
    assert.deepEqual([`result-success`, 0], changeLevel(10, balanceNotes, timeToEnd, questions));
  });
  it(`balanse notes zero, time true, questions true, fail`, () => {
    const currentQuestion = 5;
    const balanceNotes = 0;
    const timeToEnd = 60;
    assert.deepEqual([`fail-tries`, 0], changeLevel(currentQuestion, balanceNotes, timeToEnd, questions));
  });
  it(`balanse notes true, time zero, questions true, fail`, () => {
    const currentQuestion = 5;
    const balanceNotes = 1;
    const timeToEnd = 0;
    assert.deepEqual([`fail-time`, 0], changeLevel(currentQuestion, balanceNotes, timeToEnd, questions));
  });
  it(`current question is not currect, display error`, () => {
    const balanceNotes = 1;
    const timeToEnd = 60;
    assert.throws(() => {
      changeLevel(100, balanceNotes, timeToEnd, questions);
    }, Error);
    assert.throws(() => {
      changeLevel(-1, balanceNotes, timeToEnd, questions);
    }, Error);
    assert.throws(() => {
      changeLevel([1], balanceNotes, timeToEnd, questions);
    }, Error);
    assert.throws(() => {
      changeLevel(`bla`, balanceNotes, timeToEnd, questions);
    }, Error);
  });
  it(`balance notes is not currect, display error`, () => {
    const currentQuestion = 2;
    const timeToEnd = 60;
    assert.throws(() => {
      changeLevel(currentQuestion, `bla`, timeToEnd, questions);
    }, Error);
    assert.throws(() => {
      changeLevel(currentQuestion, [1], timeToEnd, questions);
    }, Error);
    assert.throws(() => {
      changeLevel(currentQuestion, -5, timeToEnd, questions);
    }, Error);
  });
  it(`timeToEnd is not currect, display error`, () => {
    const currentQuestion = 5;
    const balanceNotes = 1;
    assert.throws(() => {
      changeLevel(currentQuestion, balanceNotes, `bla`, questions);
    }, Error);
    assert.throws(() => {
      changeLevel(currentQuestion, balanceNotes, [1], questions);
    }, Error);
    /* assert.throws(() => {
      changeLevel(currentQuestion, balanceNotes, -5, questions);
    }, Error); */
  });
  it(`questions notes is not currect or empty, display error`, () => {
    const currentQuestion = 5;
    const balanceNotes = 1;
    const timeToEnd = 60;
    assert.throws(() => {
      changeLevel(currentQuestion, balanceNotes, timeToEnd, `bla`);
    }, Error);
    assert.throws(() => {
      changeLevel(currentQuestion, balanceNotes, timeToEnd, 0);
    }, Error);
    assert.throws(() => {
      changeLevel(currentQuestion, balanceNotes, timeToEnd, []);
    }, Error);
  });
});

describe(`time check test`, () => {
  it(`time true, play next, time limit 3 min`, () => {
    const timeBeginGame = 1557750897; // 12:34:57
    const currentTime = 1557751017; // 12:36:57
    assert.deepEqual([180, false], timeCheck(timeBeginGame, currentTime));
  });
  it(`time true, play stop, time limit 0 min`, () => {
    const timeBeginGame = 1557750897; // 12:34:57
    const currentTime = 1557751197; // 12:39:57
    assert.deepEqual([0, true], timeCheck(timeBeginGame, currentTime));
  });
  it(`time begin zero, display error`, () => {
    const timeBeginGame = 0;
    const currentTime = 1557751197; // 12:39:57
    assert.throws(() => {
      timeCheck(timeBeginGame, currentTime);
    }, Error);
  });
  it(`current time zero, display error`, () => {
    const timeBeginGame = 1557750897; // 12:34:57
    const currentTime = 0;
    assert.throws(() => {
      timeCheck(timeBeginGame, currentTime);
    }, Error);
  });
  it(`time begin string, display error`, () => {
    const timeBeginGame = `bla`;
    const currentTime = 1557751197; // 12:39:57
    assert.throws(() => {
      timeCheck(timeBeginGame, currentTime);
    }, Error);
  });
  it(`current time array, display error`, () => {
    const timeBeginGame = 1557750897; // 12:34:57
    const currentTime = [`bla`];
    assert.throws(() => {
      timeCheck(timeBeginGame, currentTime);
    }, Error);
  });
  it(`current time before, display error`, () => {
    const timeBeginGame = 1557751197; // 12:39:57
    const currentTime = 1557750897; // 12:34:57
    assert.throws(() => {
      timeCheck(timeBeginGame, currentTime);
    }, Error);
  });
});
