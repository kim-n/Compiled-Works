function Clock(date) {
  this.date = date;

  this.hours = date.getHours.bind(this.date);
  this.minutes = date.getMinutes.bind(this.date);
  this.seconds = date.getSeconds.bind(this.date);

}


Clock.prototype.tick = function() {
  var newTime = this.date.getTime() + 5000;
  this.date.setTime(newTime);

  console.log(this.hours() + ":" + this.minutes() + ":" + this.seconds());
}

//clock.tick is just passing a function
// so it loses the reference to clock
// and we need to bind it.
var run = function() {
  var start_time = new Date();
  var clock = new Clock(start_time);

  setInterval(clock.tick.bind(clock), 5000);
}

//run();

//---------------------------------
//addNumbers

var readline = require('readline');

READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function addNumbers(sum, numsLeft, completionCallback){

    if ( numsLeft == 0) {
      completionCallback(sum);
      READER.close();
      return;
    };

    READER.question("Next number to add: ", function(number) {
      sum += parseInt(number);
      console.log("Partial sum: " + sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });

};


// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });


//---------------------------------
//crazyBubbleSort



var crazyBubbleSort = function(arr, sortCompletionCallback) {
  var askLessThan = function(el1, el2, callback) {
    READER.question(el1 + " > " + el2 + " ? ", function(response) {
      if (response === "yes") {
        callback(true);
      } else {
        callback(false);
      }
      // response === "yes" ? callback(true) : calback(false);
    })
  }

  var performSortPass = function(arr, i, madeAnySwaps, callback) {
    if (i === arr.length -1) {
      callback(madeAnySwaps);
      return;
    }

    askLessThan(arr[i], arr[i+1], function(lessThan) {
      if (lessThan) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
      performSortPass(arr, i+1, madeAnySwaps, callback);
    })

  }

  var sortPassCallback = function(madeAnySwaps) {
    if (madeAnySwaps) {
      performSortPass(arr, 0, false, sortPassCallback);
    } else {
      READER.close();
      sortCompletionCallback(arr);
    }
  }

  sortPassCallback(true);
}

crazyBubbleSort([3, 2, 1], function (arr) { console.log(arr) });