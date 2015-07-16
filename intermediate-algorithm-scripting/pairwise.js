// Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'.
// If multiple sums are possible, return the smallest sum. 
// Once an element has been used, it cannot be reused to pair with another.
function pairwise(arr, arg){
    var newArr = [];
    if (arr.length <= 0) {
        return 0;
    }
    arr.forEach(function(num, index) {
        for (var i = index + 1; i < arr.length; i++) {
            if (arr[i] + num === arg) {
                if (newArr.indexOf(i) < 0 && newArr.indexOf(index) < 0) {
                    newArr.push(index, i);
                }
            }
        }
    });
    return newArr.reduce(function(one,two) {
        return one + two;
    });
}

pairwise([1,4,2,3,0,5], 7);