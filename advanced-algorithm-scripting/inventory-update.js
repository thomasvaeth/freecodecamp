// Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery.
// Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.
function inventory(arr1, arr2) {
  var stock = {};
  var newArr = [];
  arr1.forEach(function(a) {
    stock[a[1]] = a[0] || 0;
  });
  arr2.forEach(function(b) {
    if (!stock[b[1]]) {
      stock[b[1]] = 0;
    }
    stock[b[1]] += b[0];
  });

  Object.keys(stock).forEach(function(info) {
    newArr.push([stock[info], info]);
  });
  return newArr.sort(function(x, y) {
    if (x[1] < y[1]) {
      return -1;
    } else if (x[1] > y[1]) {
      return 1;
    } else {
      return 0;
    }
  });
}

var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
];

inventory(curInv, newInv);