// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a '...' ending.
function truncate(str, num) {
  var arr = str.split('');
  newArr = [];
  if (arr.length < num + 3 || arr.length === num) {
      return str;
  } else {
    for (var i = 0; i <= num - 3; i++) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join('').replace(/\s/g, '') + '...';
}

truncate('A-tisket a-tasket A green and yellow basket', 11);