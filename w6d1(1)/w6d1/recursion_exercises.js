var range = function(start, end) {
  if(start == end){
    return [start]
  } else {
    return [start].concat(range(start+1, end))
  }
};

// console.log(range(3,8))

var exp1 = function(b, n) {
  if(n == 0){
    return 1;
  }
  else {
    return (b * exp1(b, n - 1));
  };
};

// console.log(exp1(3, 4));

var exp2 = function(b, n) {
  if(n == 0){
    return 1;
  }
  else if (n % 2 == 0){
    return Math.pow(exp2(b, n /2), 2);
  } else {
    return b * Math.pow(exp2(b, (n-1)/2), 2);
  };
}
// console.log(exp2(3, 4));

var fibonacci = function (n) {
  if (n == 1){
    return [0];
  } else if (n == 2){
    return [0, 1];
  } else {
    prev = fibonacci(n-1);
    next_element = prev[prev.length - 1] + prev[prev.length - 2];
    result = prev.concat([next_element]);
    return result;
  };
};
// console.log(fibonacci(7))

var fibonacciIterative = function (n) {
  var fibsArr = [0, 1];
  for(var i = 2; i < n; i++) {
    fibsArr = fibsArr.concat([fibsArr[i - 1] + fibsArr[i - 2]]);
  };

  return fibsArr;
};

// console.log(fibonacciIterative(7));

var binarySearch = function(arr, target) {
  var mid = Math.floor(arr.length/2);

  if(arr[mid] == target){
    return mid;
  } else if(arr.length == 1){
    return NaN;
  } else if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target);
  } else {
    return mid + binarySearch(arr.slice(mid, arr.length), target);
  }
}
//console.log(binarySearch([4,5,6,7,8,9], 3 ));

var findCoins = function(amount, arr){
  var results = [];
  var remainingMoney = amount;

  for(var i=0; i < arr.length; i++){
    var currentCoin = arr[i];
    while(Math.floor(remainingMoney/currentCoin) != 0 ){
      remainingMoney -= currentCoin;
      results.push(currentCoin);
    }
  }
  return results
}

var makeChange2 = function(amount, arr) {
  var bestChange = findCoins(amount, arr);
  for(var i=1; i < arr.length; i++){
    var currentChange = findCoins(amount, arr.slice(i, arr.length))
    if(currentChange.length < bestChange.length){
      bestChange = currentChange;
    }
  }
  return bestChange;
}

// console.log(makeChange2(21, [10,7,1]));



var mergeSort = function(arr){
  if (arr.length == 1){
    return arr;
  } else {
    var middle = Math.floor(arr.length/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle, arr.length)

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
  }
}

var merge = function(left, right){
  var result = []
  while(left.length > 0 || right.length > 0){

    if(left.length > 0 && right.length > 0) {
      if(left[0] <= right[0]) {
        result.push(left[0]);
        left = left.slice(1, left.length);
      }
      else {
        result.push(right[0]);
        right = right.slice(1, right.length);
      }
    }
    else if(left.length > 0) {
      result = result.concat(left);
      left = [];
    }
    else if(right.length > 0) {
      result = result.concat(right);
      right = [];
    }
  }
  return result;
}

// console.log(mergeSort([5,8,6,17,44,33]));



Array.prototype.myEach = function(functionVar)
{
  for(var i=0; i< this.length; i++)
  {
    functionVar(this[i]);
  }
  return this;
};

Array.prototype.myMap = function (elementModifier) {
  var resultsArr = [];
  this.myEach( function (element) {
    resultsArr.push(elementModifier(element));
  });
  return resultsArr;
};

//console.log([1,2,3,4].myMap(function(a){return a + 3000}));

var subsets = function(arr) {
  if( arr.length == 0){
    return [[]];
  }
  var subs = subsets(arr.slice(0, arr.length-1));
  var myMapFunction = function(el) {
    return el.concat(arr.slice(arr.length - 1, arr.length));
  };
  return subs.concat(subs.myMap(myMapFunction));
}

console.log(subsets([1,2,3,17,534,"a",[42]]))