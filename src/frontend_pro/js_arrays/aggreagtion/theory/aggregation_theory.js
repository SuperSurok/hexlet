// get max
const getMax = (arr) => {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
        const currentIndex = arr[i];
        if (currentIndex > max) {
            max = currentIndex;
        }
    }
    return max;
}

// get sum
const getSum = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += arr[num];
    }
    return sum;
}

const aarr = [1, 2, 3];
console.log(getSum(aarr))