// Repeat a given string (first argument) n times (second argument).
// Return an empty string if n is a negative number.
function repeatStringNumTimes(str, num) {
	var combined = '';
	if (num <= 0 ) {
		return combined;
	} else {
		for (var i = 0; i < num; i++) {
			combined += str;
		}
	return combined;
	}
}

repeatStringNumTimes('abc', 3);