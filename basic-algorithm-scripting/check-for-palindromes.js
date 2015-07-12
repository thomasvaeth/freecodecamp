// Return true if the given string is a palindrome.
// Otherwise, return false.
function palindrome(str) {
	var noSpace = str.replace(/\W/g, '').toLowerCase();
	var strReverse = noSpace.split('').reverse().join('');
	if (noSpace === strReverse) {
		return true;
	} else {
		return false;
	}
}

palindrome("eye");