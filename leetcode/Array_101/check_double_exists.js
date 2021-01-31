var checkIfExist = function(arr) {  
    var len = arr.length;

    if (len < 2 || len > 500) {
        return false;
    }

    for (var i = 0; i < len; i++) {
        var m = arr[i];

        for (var j = 0; j < len; j++) {
            var n = arr[j];

            if (n === 2 * m && i !== j) {
                return true;
            } 
        }
    }
    return false;
};

var arrData = [10,2,5,3]

checkIfExist(arrData);