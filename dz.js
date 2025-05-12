function isEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function isEqualObj(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
      if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

function maxQualityDifference(nums) {
  let maxDiff = -Infinity;

  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (i === j) continue;
          for (let k = 0; k < nums.length; k++) {
              for (let l = 0; l < nums.length; l++) {
                  if (k === l || k === i || k === j || l === i || l === j) continue;
                  let diff = nums[i] * nums[j] - nums[k] * nums[l];
                  if (diff > maxDiff) maxDiff = diff;
              }
          }
      }
  }
  return maxDiff;
}

console.log(isEqualArrays([1,2,3], [1,2,3]));
console.log(isEqualArrays([1,2,3], [1,2,4]));

console.log(isEqualObj({a: 1, b: 2}, {a: 1, b: 2}));
console.log(isEqualObj({a: 1, b: 2}, {a: 2, b: 2}));

const arr = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);
console.log(maxQualityDifference(arr));