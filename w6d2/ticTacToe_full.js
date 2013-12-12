function Board() {
  this.grid = [[" "," "," "], [" "," "," "],[" "," "," "]];
}

Board.prototype.print = function() {
  console.log("");
  var cnt = 2;
  this.grid.forEach( function(row) {
    console.log(" " + row.join(" | ") + " ");
    if (cnt > 0) {
      console.log("-----------");
    }
    cnt--;
  })
  console.log("");
}

Board.prototype.valid = function(pos) {
  return this.grid[pos[0]][pos[1]] === " ";
}

Board.prototype.place = function(pos, mark) {
  this.grid[pos[0]][pos[1]] = mark;
}

Board.prototype.isFull = function() {
  var boardFull = true
  this.grid.forEach( function(row) {
    if (row.indexOf(" ") > -1) {
      boardFull = false;
      return;
    }
  })

  return boardFull;
}

Board.prototype.makeHorizontals = function() {
  return this.grid;
}

Board.prototype.makeVerticals = function() {
  var verticals = [[],[],[]];

  for (var i=0; i < this.grid.length; i++) {
    for (var j=0; j < this.grid[i].length; j++) {
      verticals[j][i] = this.grid[i][j];
    }
  }

  return verticals;
}

Board.prototype.makeDiagonals = function() {
  var d1 = [this.grid[0][0], this.grid[1][1], this.grid[2][2]];
  var d2 = [this.grid[0][2], this.grid[1][1], this.grid[2][0]];

  return [d1,d2];
}

Board.prototype.gameWon = function() {
  var lines = [];
  lines = lines.concat(this.makeHorizontals());
  lines = lines.concat(this.makeVerticals());
  lines = lines.concat(this.makeDiagonals());

  var winningLines = lines.filter( function (line) {
    return line[0] == line[1] && line[1] == line[2] && line[0] != " ";
  });

  return winningLines.length > 0;
}

Board.prototype.gameOver = function(mark) {
  return this.gameWon(mark) || this.isFull();
}

//--------

function TicTacToe() {
  this.board = new Board();
  this.players = [new Player("X"), new Player("O")]
}

TicTacToe.prototype.switchPlayers = function() {
  var currentPlayer = this.players.shift();
  this.players.push(currentPlayer);
}

TicTacToe.prototype.play = function() {
  this.board.print();

  if (this.board.gameOver()) {
    reader.close();
    if(this.board.gameWon()){
      this.switchPlayers();
      console.log(this.players[0].mark + " Won!")
    } else {
      console.log("Game Over. No winner!");
    }
    return;
  }

  //get input
  var move = [];

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

function Player(mark) {
  this.mark = mark;
}

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

Player.prototype.getMove = function(callback) {
  reader.question("Position? (row,col): ", function(pos){
    var posArray = pos.split(",", 2)
    callback([parseInt(posArray[0]), parseInt(posArray[1])]);
  })
}

// var board = new Board();
// board.print();

var game = new TicTacToe()
game.play();


