// Return true if the given string is a palindrome.
// Otherwise, return false.
function palindrome(str) {
	var strReverse = str.replace(/\W/g, '').toLowerCase();
	var noSpace = strReverse.split('').reverse().join('');
	if (strReverse === noSpace) {
		return true;
	} else {
		return false;
	}
}

palindrome("eye");