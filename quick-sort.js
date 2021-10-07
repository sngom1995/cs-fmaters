function quickSort(nums) {
  // base case , array of length 0

  if (nums.length <= 1) {
    return nums;
  }

  // choose a pivot
  const pivot = nums[nums.length - 1];
  // separate into left and right arrays

  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(quickSort(nums));
