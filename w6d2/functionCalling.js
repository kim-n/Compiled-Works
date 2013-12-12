// myBind
//----------------------------

Function.prototype.myBind = function(obj){
  //console.log(this.name);
  //var name = this;
  //return obj[name];
  this.apply(obj);
  //return this;
}

var Cat = function(name) {
  this.name = name;
  this.greet = function() {
    console.log("My name is " + this.name);
  }
}

var cat = new Cat("Harry");
var n = cat.greet.myBind(cat);
cat.greet();

