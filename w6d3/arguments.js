var sum = function() {
  var total = 0;
  for(var i=0; i < arguments.length; i++){
    total += arguments[i];
  }

  return total;
}


var a = sum(1, 2, 3, 4) //== 10
//var b = sum(1, 2, 3, 4, 5) //== 15
//console.log(a);

Function.prototype.myBind = function(obj) {
  //var args = arguments || [];
  var args = Array.prototype.slice.call(arguments);
  var object =  args.shift();
  var that = this
  return function() {

    args = args.concat(Array.prototype.slice.call(arguments));
    that.apply(object, args);
  }
}


var myFunction = function(a, b, c) {
  console.log(a,b,c);
}
var myBoundFunction = myFunction.myBind("", 1, 2);
//console.log(myBoundFunction(3));
///obj.myFunction(1, 2, 3)



// Curry
//---------------

// Function.prototype.myFunc = function() {
//   console.log(typeof this);
// }
// myFunc();

var curriedSum = function(numArgs) {
  var numbers = [];

  var _curriedSum = function(number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      var total = 0;
      for(var i=0; i < numbers.length; i++) {
        total += numbers[i];
      }

      return total;
    }
    return _curriedSum; // <--------------------------------------- QUestion.
  }

  return _curriedSum;
}

//var a = curriedSum(3)(1)(2)(3);
//console.log(a);

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


Function.prototype.curry = function(numArgs) {
  var numbers = [];

  var originalFunction = this;
  var _curried = function(number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      return originalFunction.apply(null, numbers)
    }
    return _curried; // <--------------------------------------- QUestion.
  }

  return _curried;
}


// var cr = sumThree.curry(3)(4)(20)(3);
// console.log(cr);