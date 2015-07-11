// Check if a string (first argument) ends with the given target string (second argument).
function end(str, target) {
	var length = target.length;
	if (str.substr(-length) === target) {
		return true;
	} else {
		return false;
	}
}

end('Bastian', 'n');