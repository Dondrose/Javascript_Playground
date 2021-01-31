var findNumbers = function(nums) {
  if (nums.length < 1 || nums.length >= 500){
    return console.log("Not a valid input array.");
  }

  var count = 0;
  for (var i = 0; i < nums.length; i++)  {
      
      var currVal = nums[i].toString();
      if (nums[i] <= 1 || nums[i] > Math.pow(10,5)) {
        continue;
      } else if (currVal.length % 2 == 0) {
        count++;
      }
  }
  return count;
};

var inputArr = [12,345,2,6,7896];
var results = findNumbers(inputArr);
console.log("Example 1: Results - Input: [12,345,2,6,7896]");
console.log("---------------------------------------------");
console.log(results);

var inputArr2 = [555,901,482,1771];
var results2 = findNumbers(inputArr2);
console.log("Example 2: Results - Input: [555,901,482,1771]");
console.log("---------------------------------------------");
console.log(results2);

var inputArr3 = [0];
var results3 = findNumbers(inputArr3);
console.log("Example 3: Results - Input: [0]");
console.log("---------------------------------------------");
console.log(results3);

var inputArr4 = [];
var results4 = findNumbers(inputArr4);
console.log("Example 4: Results - Input: []");
console.log("---------------------------------------------");
console.log(results4);

var inputArr5 = [22,22,22,22];
var results5 = findNumbers(inputArr5);
console.log("Example 5: Results - Input: []");
console.log("---------------------------------------------");
console.log(results5);