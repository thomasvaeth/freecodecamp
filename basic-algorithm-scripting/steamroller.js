// Flatten a nested array.
// You must account for varying levels of nesting.
function checker(a, b) {
	return a.concat((Array.isArray(b)) ? steamroller(b) : b);
}

function steamroller(arr) {
	return arr.reduce(checker, []);
}

steamroller([1, [2], [3, [[4]]]]);