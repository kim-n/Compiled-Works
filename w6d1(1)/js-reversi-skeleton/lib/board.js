var Piece = require("./piece.js").Piece;

function Board(){
  this.grid = []
  for(var i = 0; i < 8; i++){
    this.grid.push([0,0,0,0,0,0,0,0]);
  }
  this.grid[3][3] = new Piece('w');
  this.grid[4][4] = new Piece('w');
  this.grid[4][3] = new Piece('b');
  this.grid[3][4] = new Piece('b');
};

Board.prototype.startBoard = function(){
  this.grid[3][3] = new Piece('w');
  this.grid[4][4] = new Piece('w');
  this.grid[4][3] = new Piece('b');
  this.grid[3][4] = new Piece('b');
  return this
}

Board.prototype.full = function() {
  for(var i = 0; i < 8; i++) {
    for(var j = 0; j < 8; j++) {
      if(this.grid[i][j] == 0) {
        return false;
      }
    }
  }

  return true;
};

Board.prototype.print = function() {
  for(var i = 0; i < 8; i++) {
    var arr = []
    for(var j = 0; j < 8; j++) {
      if(this.grid[i][j] == 0) {
        arr.push("_")
      } else {
        arr.push(this.grid[i][j].color)
      }
    }
    console.log(arr.join(" "))
  }
}

var OFFSETS = [
[0,1], [1,0], [1,1], [-1,-1], [0,-1],[-1,0], [1, -1], [-1, 1]
]
// Other helper methods may be helpful!

Board.prototype.validMoves = function (color) {
  var emptyPos = this.getEmptyPositions();
  var oppositeColor
  if (color == 'b'){
    oppositeColor = 'w';
  } else {
    oppositeColor = 'b';
  }


  for(var i = 0; i < emptyPos.length; i++){

    var sX = emptyPos[i][0]
    var sY = emptyPos[i][1]
    while( this.grid[sX][sY] == oppositeColor){
      sX =
    }
  }

}

Board.prototype.getEmptyPositions = function(){
  var posArray = []

  for(var i = 0; i < 8; i++) {
    for(var j = 0; j < 8; j++) {
      if(this.grid[i][j] == 0) {
        posArray.push([i,j])
      }
    }
  }
  return posArray
}


Board.prototype.validMoves = function (color) {
  var movesArray = [];
}

exports.Board = Board;

board = new Board;
board.print();