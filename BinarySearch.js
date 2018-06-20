
const rank = (arr, key) => {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    let i = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end && i < 50) {
        i++
        mid = start + _.floor((end - start) / 2);
        if (key < arr[mid]) {
            end = mid - 1;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

let iii = 0;
const rank_ = function (arr, key, start = 0, end = arr.length - 1) {
    console.warn(iii++);
    
    mid = start + _.floor((end - start) / 2);
    if (start > end) {
        return -1;
    } else if (key < arr[mid]) {
        return rank_(arr, key, start, mid - 1)
    } else if (key > arr[mid]) {
        return rank_(arr, key, mid + 1, end)
    } else {
        return mid;
    }
}
