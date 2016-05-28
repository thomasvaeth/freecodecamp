// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length; 
}

getIndexToIns([40, 60], 50);