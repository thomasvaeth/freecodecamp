// Return true if the given string is a palindrome.
// Otherwise, return false.
function palindrome(str) {
	var strStripped = str.replace(/[\W_]/g, '').toLowerCase();
	var strReverse = noSpace.split('').reverse().join('');
	return strStripped === strReverse ? true : false;
}

palindrome("eye");