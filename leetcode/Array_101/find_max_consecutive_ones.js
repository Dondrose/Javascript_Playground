var findMaxConsecutiveOnes = function(nums) {
    if (nums === undefined || nums.length == 0) {
        return console.log("Not a valid input array");
    }
    
    var count = 0;
    var max_ones = 0;
    
    for (var i =0; i < nums.length; i++) {
        if (nums[i] == 1){
            count++;
        } else {
            if (max_ones < count) {
                max_ones = count;
            }
            count = 0;
        }
    }
    if (max_ones < count) {
        max_ones = count;
    }
    return max_ones
};


/** 
 * 
 * Test Cases:
 * Example 1: 
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * 
 * */ 

var inputArr = [1,1,0,1,1,1];
var results = findMaxConsecutiveOnes(inputArr);
console.log("Example 1: Results - Input: [1,1,0,1,1,1]");
console.log("---------------------------------------------");
console.log(results);

var inputArr2 = [1,1,1,1,1];
var results2 = findMaxConsecutiveOnes(inputArr2);
console.log("Example 2: Results - Input: [1,1,1,1,1]");
console.log("---------------------------------------------");
console.log(results2);

var inputArr3 = [0];
var results3 = findMaxConsecutiveOnes(inputArr3);
console.log("Example 3: Results - Input: [0]");
console.log("---------------------------------------------");
console.log(results3);

var inputArr4 = [];
var results4 = findMaxConsecutiveOnes(inputArr4);
console.log("Example 4: Results - Input: []");
console.log("---------------------------------------------");
console.log(results4);
