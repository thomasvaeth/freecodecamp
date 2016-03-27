// Translate the provided string to pig latin.
function translate(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (str.charAt(0) === vowels[i]) return str + 'way';
  }
  for (var j = 1; j < str.length; j++) {
    for (i = 0; i <vowels.length; i++) {
      if (str.charAt(j) === vowels[i]) {
        var ending = str.substr(0, j);
        var beginning = str.substr(j);
        return beginning + ending + 'ay';
      }
    }
  }
}

translate("consonant");