// Find the missing letter in the passed letter range and return it.
function fearNotLetter(str) {
  var letter = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) {
    var next = str.charCodeAt(i);
    if (letter === next - 1) {
      letter = next;
    } else {
      return String.fromCharCode(letter + 1);
    }
  }
  return undefined;
}

fearNotLetter('abce');