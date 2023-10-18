function findMinX(arr) {
    let sum = 0;
    
    for (let i of arr) {
        sum += i;
    }

    let average = Math.ceil(sum / arr.length);

    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.max(arr[i], average);
    }

    return average;
}

console.log(findMinX([1, 2, 3, 4, 5, 6]));
