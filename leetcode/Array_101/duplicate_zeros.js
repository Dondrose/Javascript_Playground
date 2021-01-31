var duplicateZeros = function(arr) {
    var len = arr.length;
    var convertedLen = 0;
    if (len < 1 || len > 10000) {
        return;    
    }
    
    for (var i = 0; i <= len; i++) {

        if (arr[i] == 0) {
            arr.splice(i+1,0,0);
            i++;
        } else if (arr[i] < 1 || arr[i] > 9) {
            return;
        } else {
            continue;
        }
    }
    
    convertedlen = arr.length;
    if (len == convertedlen) {
       
    } else {
        do {
            arr.pop();
            convertedlen = arr.length;
        } while (len !== convertedlen)
    }
};