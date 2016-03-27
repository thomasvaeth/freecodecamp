// Find the smallest number that is evenly divisible by all numbers in the provided range.
function smallestCommons(arr) {
  var newArr = arr.sort();
  var num = newArr[1]; 
  while (true) {
    var common = true;
    for (var i = newArr[0]; i <= newArr[1]; i++) {
      common = common && (num % i === 0);
    }
    if (common) return num;
    num += newArr[1];
  }
}

smallestCommons([1,5]);