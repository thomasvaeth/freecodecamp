function rot13(str) {
	var arr = str.split('');
	var newArr = [];
	var letterCode = 0;
	arr.forEach(function(letter) {
		if (letter.charCodeAt() < 65 || letter.charCodeAt() > 90) {
			letterCode = letter.charCodeAt();
		} else {
			if (letter.charCodeAt() + 13 > 90 ) {
				letterCode = letter.charCodeAt() - 13;
			} else {
				letterCode = letter.charCodeAt() + 13;
			}
		}
		newArr.push(String.fromCharCode(letterCode));
	});
	return newArr.join('');
}

rot13("SERR PBQR PNZC");