// Compare two arrays and return a new array with any items not found in both of the original arrays.
function diff(arr1, arr2) {
  var newArr = [];
  arr1.filter( function (num) {
    if (arr2.indexOf(num) === -1) {
      arr1.concat(arr2);
      newArr.push(num);
    }
  });
  arr2.filter( function (num) {
    if (arr1.indexOf(num) === -1) {
      arr2.concat(arr1);
      newArr.push(num);
    }
  });
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);