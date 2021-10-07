function nestedAdd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (Array.isArray(current)) {
            sum += nestedAdd(current);
        } else {
            sum += current;
        }
    }
    return sum;
}

function factorial(n) {
    if (n < 2) {
        return 1;
    } else {
        return n + factorial(n - 1);
    }
}

console.log(nestedAdd([1, 3, 4]));
console.log(nestedAdd([[1, 3], 4]));
console.log(factorial(6));
