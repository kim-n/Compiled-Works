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

module.exports = {
  player: Player,
  reader: reader
}

