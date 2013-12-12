// Towers of Hanoi
//------------------------
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function Game() {
  this.towers = [[],[],[]];
  this.towers[0] = [2,1];
}

Game.prototype.print = function() {
  this.towers.forEach( function(tower){
    console.log("[ " + tower.join(" "));
  } )
}

Game.prototype.move = function(fromTower, toTower) {
  var piece = this.towers[fromTower].pop();
  this.towers[toTower].push(piece);
}

Game.prototype.validMove = function(fromTower, toTower) {
  if (this.towers[fromTower].length == 0){
    return false;
  }
  if (this.towers[toTower].length == 0){
    return true;
  } else {
    var topPiece = this.towers[fromTower][this.towers[fromTower].length - 1];
    var bottomPiece = this.towers[toTower][this.towers[toTower].length - 1];
    return bottomPiece > topPiece;
  }
}

Game.prototype.won = function(){
  return this.towers[2].length == 2
}

Game.prototype.getMove = function(callback) {
  reader.question("Pick start tower: ", function(startTower) {
    reader.question("Pick end tower: ", function(endTower) {
     callback([parseInt(startTower), parseInt(endTower)]);
    })
  })
}

Game.prototype.play = function() {
  this.print();
  if (this.won()){
    console.log("You Win!");
    reader.close();
    return;
  }
  // while (!this.won()) {
  var gameObject = this;
  this.getMove( function(possibleMove){
    if (gameObject.validMove(possibleMove[0], possibleMove[1])) {
      gameObject.move(possibleMove[0], possibleMove[1]);
    } else {
      console.log("invalid choices");
    }
    gameObject.play();
  });

    // this.print();
  // }
}

var hanoi = new Game();
hanoi.play();