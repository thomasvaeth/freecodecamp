// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
function replace(str, before, after) {
	str = str.split(' ');
	for (var i = 0; i < str.length; i++) {
		if (str[i] === before) {
			if (str[i].charAt(0) === str[i].charAt(0).toUpperCase()) {
				str[i] = after.charAt(0).toUpperCase() + after.substring(1);
			} else {
				str[i] = after;
			}
		}
	}
	return str.join(' ');
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");