/**
 * 
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 */


// Sorted Squares main function
var sortedSquares = function(nums) {
    // Get the length of the input array.
    var len = nums.length;

    // Return if the length of the input array are outside the constraints
    // If this case if the length is less that 1 or greater than 10,000.
    if (len < 1 || len > 10000){
        return 0;
    }

    // Using the array map method, for each element within bounds, square it and return the value to temporary array
    var tmpArr = nums.map(function(x) {
        if (x < -10000 || x > 10000) {
            return;
        }

        // Return the current element to power of 2
        return Math.pow(x,2);
    });
    // Return the temporary array as a sorted array
    return bSort(tmpArr);
};

// Sorting function that utilizes 
var bSort = function(arr) {
    // Assigns the length of the input array to newly intialized variable 'len'
    var len = arr.length;
    
    //  Initialize swap variable
    var swap;

    // Do-While statement: That sets swap variable to false, it will be used as counter.
    do {
        swap = false;
        // For loop to iterate to through the length of the array
        for (var i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                var tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swap = true;
            }
        }
    } while (swap);
    return arr
};

// Test Cases:

// Test Example 1:
var inputArr = [-4,-1,0,3,10];
var results = sortedSquares(inputArr);
console.log("Example 1: Results - Input: [-4,-1,0,3,10]");
console.log("---------------------------------------------");
console.log(results);

// Test Example 2:
var inputArr2 = [-7,-3,2,3,11];
var results2 = sortedSquares(inputArr2);
console.log("Example 2: Results - Input: [-7,-3,2,3,11]");
console.log("---------------------------------------------");
console.log(results2);
  
// Test Example 3:
var inputArr3 = [0];
var results3 = sortedSquares(inputArr3);
console.log("Example 3: Results - Input: [0]");
console.log("---------------------------------------------");
console.log(results3);

// Test Example 4:
var inputArr4 = [];
var results4 = sortedSquares(inputArr4);
console.log("Example 4: Results - Input: []");
console.log("---------------------------------------------");
console.log(results4);
  
  var inputArr5 = [2,3,4,5];
  var results5 = sortedSquares(inputArr5);
  console.log("Example 5: Results - Input: [2,3,4,5]");
  console.log("---------------------------------------------");
  console.log(results5);