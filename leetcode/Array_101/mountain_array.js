var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }

    var len = arr.length;
    var count = 0;

    while (count + 1 < len && arr[count] < arr[count + 1]) {
        count++;
    }

    if (count == 0 || count == len -1) {
        return false;
    }

    while (count + 1 < len && arr[count] > arr[count +1]) {
        count++;
    }

    return count == len - 1;
}
