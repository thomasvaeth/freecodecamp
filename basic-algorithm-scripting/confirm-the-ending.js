// Check if a string (first argument) ends with the given target string (second argument).
function confirmEnding(str, target) {
	var length = target.length;
	return str.substr(-length) === target ? true : false;
}

confirmEnding('Bastian', 'n');