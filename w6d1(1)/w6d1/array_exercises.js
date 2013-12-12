Array.prototype.dups = function() {
  var dup_free_array = [];

  for(var i = 0; i < this.length; i++){
    if (dup_free_array.indexOf(this[i]) == -1){
      dup_free_array.push(this[i]);
    }
  }

  return dup_free_array;
}


Array.prototype.twoSum = function() {
  var zero_sums = [];

  for(var i =0; i < this.length - 1; i++){
    for(var j=i+1; j< this.length; j++ ){
      if(this[i] + this[j] == 0 ){
        zero_sums.push([i,j]);
      }
    }
  }

  return zero_sums;
}
/*
[[],[],[]]
[i][j] = [j][i]

*/
Array.prototype.my_transpose = function() {
  var cols = [];

  for(var i=0; i < this.length; i++)
  {
    cols.push([]);
  };

  for(var i=0; i < this.length; i++)
  {
    for(var j=0; j < this.length; j++)
    {
      cols[j][i] = this[i][j];
    };
  };

  return cols;
};



var arr = [1,3,2,2,3,4];
console.log(arr.dups());

console.log([-1, 0, 2, -2, 1].twoSum());

console.log([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ].my_transpose());