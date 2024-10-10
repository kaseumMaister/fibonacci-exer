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

function mergesort(arr) {
    if (arr.length <= 1) return arr;

    const half = Math.floor(arr.length / 2);
    const left = mergesort(arr.slice(0, half));
    const right = mergesort(arr.slice(half));

    return merge(left, right)
}

function merge(left, right) {
  let sort = [] 
  let i = 0; j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
        sort.push(left[i]);
        i++;
    } else {
        sort.push(right[j]);
        j++;
    }
  }

  return sort.concat(left.slice(i)).concat(right.slice(j));
    
}

console.log(mergesort([5,9,8,7,4,3,2,1]))


