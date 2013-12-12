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

module.exports = {
  board: Board
}
