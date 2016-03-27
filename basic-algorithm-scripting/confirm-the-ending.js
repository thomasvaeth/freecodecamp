// Check if a string (first argument) ends with the given target string (second argument).
function end(str, target) {
	var length = target.length;
	return str.substr(-length) === target ? true : false;
}

end('Bastian', 'n');