/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
    // code goes here
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return nums;
}
const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(bubbleSort(nums));
