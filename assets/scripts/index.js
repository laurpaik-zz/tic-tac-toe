'use strict';

// const setAPIOrigin = require('../../lib/set-api-origin');
// const config = require('./config');
//
// $(() => {
//   setAPIOrigin(location, config);
// });
//
// // use require with a reference to bundle the file and use it in this file
// // const example = require('./example');
//
// // use require without a reference to ensure a file is bundled
// require('./example');

let game = {
  gameBoard: [
    '', '', '',
    '', '', '',
    '', '', '',
  ],
  player: 'x',

  setNextPlayer: function () {
    if (this.player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }
  },

  yourMove: function () {
    for (let i = 0; i < this.gameBoard.length; i++) {
      if (this.player === 'x' && this.gameBoard[i] === '') {
        this.gameBoard[i] = 'x';
      } else if (this.player === 'x' && this.gameBoard[i] !== '') {
        this.gameBoard[i] = this.gameBoard[i];
      }
    }

    return this.gameBoard;
  },
};

const player = [
  'x',
  'o',
];

const yourMove = function () {
  for (let i = 0; i < player.length; i++) {
    for (let j = 0; j < this.gameBoard.length; j++) {
      if (player[i] && this.gameBoard[j] === '') {
        this.gameBoard[j] = player[i];
      } else if (player[i] && this.gameBoard[j] !== '') {
        this.gameBoard[j] = this.gameBoard[j];
      }
    }
  }

  return this.gameBoard;
};

const threeInARow = function (player, cellOne, cellTwo, cellThree) {
  if ((cellOne === player) && (cellTwo === player) && (cellThree === player)) {

    return true;
  }
};

const winRow = function (player) {
  if (threeInARow(player, game.board[0], game.board[1], game.board[2]) ||
  threeInARow(player, game.board[3], game.board[4], game.board[5]) ||
  threeInARow(player, game.board[6], game.board[7], game.board[8])) {

    return true;
  }
};

const winColumn = function (player) {
  if (threeInARow(player, game.board[0], game.board[3], game.board[6]) ||
  threeInARow(player, game.board[1], game.board[4], game.board[7]) ||
  threeInARow(player, game.board[2], game.board[5], game.board[8])) {

    return true;
  }
};

const winDiag = function (player) {
  if (threeInARow(player, game.board[0], game.board[4], game.board[8]) ||
  threeInARow(player, game.board[2], game.board[4], game.board[6])) {

    return true;
  }
};

const winnerIs = function (player) {
  let winner = '';
  if (winRow || winColumn || winDiag) {
    winner = player;
  }
};

module.exports = {
  game,
  yourMove,
  winnerIs,
};
