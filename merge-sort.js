const mergeSort = (nums) => {
    // base case
    if (nums.length < 2) {
        return nums;
    }

    // you can be more clever about this code but I wanted it
    // to be readable to you
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    // merge takes two sorted lists and returns one sorted list
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const results = [];

    // go until one list runs outs
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            // shift removes the first element in an array and returns it
            // it's like .pop() for the front
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    // either left or right will be empty so you can safely concat both
    return results.concat(left, right);
};

const numbs = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(mergeSort(numbs));
