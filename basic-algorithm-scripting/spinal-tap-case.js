// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
	var newStr = str.split(' ').join('-').split('_').join('-');
	newStr = newStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	return newStr;
}

spinalCase('This Is Spinal Tap');