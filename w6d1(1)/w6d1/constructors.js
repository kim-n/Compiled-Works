function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

// Cat.prototype.cuteStatement = function () {
//   return this.owner + " loves " + this.name;
// }
Cat.prototype.cuteStatement = function () {
  return "everyone loves " + this.name
}

Cat.prototype.meow = function () {
  return "meow"
}

var kat = new Cat("guy", "other guy");
console.log(kat.cuteStatement());

var katty = new Cat("katty", "guy");
console.log(katty.cuteStatement());

kat.meow = function(){
  return "roof"
}
console.log(kat.meow());
console.log(katty.meow());