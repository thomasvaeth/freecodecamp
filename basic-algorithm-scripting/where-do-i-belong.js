// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
function where(arr, num) {
  var newArr = [];
  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      newArr.push(num);
      return i;
    } else {
      newArr.push(arr[i]);
    }
  }
}

where([40, 60], 50);