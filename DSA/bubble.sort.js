function bubble_sort(arr) {
    let n = arr.length;
    let isSorted = true;
    for(let i=0; i<n-1; i++) {
        for( let j=0; j<n-1-i; j++){
            if(arr[j] > arr[j+1]) {
                // let temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSorted = false;
            }
        }
        if(isSorted === true) break;
    }
    return arr;
}

console.log(bubble_sort([5, 3, 8, 4, 2]));
