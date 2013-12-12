var Piece = require("./piece.js").Piece;
var Board = require("./board.js").Board;

function Game() {
	this.board = new Board();
	// Other attributes?
};

// You will certainly need some more helper methods...

Game.prototype.won = function() {

};

// pos =[x,y]
Game.prototype.placePiece = function(pos, color) {
  /*
  if pos is empty
    if pos is in valid_moves(color)
  */

};

Game.prototype.runLoop = function() {

};

exports.Game = Game;