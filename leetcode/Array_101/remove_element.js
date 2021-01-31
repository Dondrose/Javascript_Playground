var removeElement = function(nums, val) {
    if (nums.length < 0 || nums.length > 100) return;
    if (val < 0 || val > 100) return;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1);
            i--;
        }
    }
    
    return nums.length;
};
var numsArr = [3,2,2,3]
var value = 3
var testArr = removeElement(numsArr, value);
console.log(testArr);