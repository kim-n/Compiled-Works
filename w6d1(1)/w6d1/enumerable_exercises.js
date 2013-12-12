Array.prototype.multiples = function()
{
  multiples_arr = [];
  this.forEach(function(entry) {
    multiples_arr.push(entry * 2);
  });
  return multiples_arr;
};

Array.prototype.myEach = function(functionVar)
{
  for(var i=0; i< this.length; i++)
  {
    functionVar(this[i]);
  }
  return this;
};


//[1,2,3].myEach(function(a){ console.log(a + 3000)});

Array.prototype.myMap = function (elementModifier) {
  var resultsArr = [];
  this.myEach( function (element) {
    resultsArr.push(elementModifier(element));
  });
  return resultsArr;
};

console.log([1,2,3,4].myMap(function(a){return a + 3000}));

Array.prototype.myInject = function (accumulatorFunction) {
  var results = this[0];
  var accumulators = this.slice(1, this.length);
  accumulators.myEach( function (element) {
    results = accumulatorFunction(results, element);
  });
  return results;
}

// var accumulatorFunction = function(first_el, second_el){ return first_el + second_el}
// var results = [1,2,3,4].myInject(accumulatorFunction);
// console.log(results)

Array.prototype.bubbleSort = function () {
  var unsorted = true;
  while(unsorted) {
    unsorted = false;
    for(var i = 0; i< this.length - 1; i++){
      if(this[i] > this[i+1]){
        var temp = this[i];
        this[i]  = this[i+1];
        this[i+1] = temp;
        unsorted = true;
      };
    };
  };
};

// var myArr = [2,3,4,1];
// myArr.bubbleSort();
// console.log(myArr);

String.prototype.mySubstrings = function () {
  var allSubstrings = [];
  for(var i = 0; i < this.length; i++){
    for(var j = i + 1; j < this.length + 1; j++){
      allSubstrings.push(this.substring(i,j));
    };
  };

  return allSubstrings;
};

// console.log("cat".mySubstrings());