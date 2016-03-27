// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  var destroy = [];
  for (var i = 1; i < arguments.length; i++) {
    destroy.push(arguments[i]);
  }
  function checkList (search) {
    for (var j = 0; j < destroy.length; j++) {
      return arr[search] === destroy[j] ? true : false;
    }
  }
  return arr.filter(checkList);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);