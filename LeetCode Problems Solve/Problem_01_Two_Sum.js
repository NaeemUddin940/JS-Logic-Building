// Solution Number 01

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 5, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([3, 3], 6));

// Solution Number 02
console.log("---------------------------------------------");
let twoSum1 = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
};

console.log(twoSum1([2, 7, 5, 15], 9));
console.log(twoSum1([2, 3, 4], 6));
console.log(twoSum1([3, 3], 6));

// Solution Number 03
console.log("---------------------------------------------");
function twoSum3(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
}
console.log(twoSum3([2, 7, 5, 15], 9));
console.log(twoSum3([2, 3, 4], 6));
console.log(twoSum3([3, 3], 6));
