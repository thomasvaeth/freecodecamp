// Return the provided string with the first letter of each word capitalized.

function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  var newArr = [];
  arr.forEach(function(word) {
      var capWord = word.charAt(0).toUpperCase() + word.substring(1);
    newArr.push(capWord);
  });
  return newArr.join(' ');
}

titleCase("I'm a little tea pot");