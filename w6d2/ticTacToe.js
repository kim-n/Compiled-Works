// var Board = require('./Board.js');
// var Player = require('./Player.js');


function TicTacToe() {
  var Board = require('./Board.js');
  var Player = require('./Player.js');

  this.board = new Board.board();
  this.players = [new Player.player("X"), new Player.player("O")]
}

TicTacToe.prototype.switchPlayers = function() {
  var currentPlayer = this.players.shift();
  this.players.push(currentPlayer);
}

TicTacToe.prototype.play = function() {
  this.board.print();

  if (this.board.gameOver()) {
    Player.reader.close();
    if(this.board.gameWon()){
      this.switchPlayers();
      console.log(this.players[0].mark + " Won!")
    } else {
      console.log("Game Over. No winner!");
    }
    return;
  }

  var that = this;
  this.players[0].getMove( function(move) {
    if (that.board.valid(move)) {
      that.board.place(move, that.players[0].mark);
      that.switchPlayers();
    } else {
      console.log("invalid move " + that.players[0].mark);
    }
    that.play();
  });

}


var game = new TicTacToe()
game.play();