function sort(arr) {
    if (arr.length == 1) return arr;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let prima = arr[i];
            let secon = arr[i + 1];
            arr[i] = secon;
            arr[i + 1] = prima;
            sort(arr);
        }
    }

    return arr
}

console.log(sort([100,1,8,7,2,91,19,10]));
