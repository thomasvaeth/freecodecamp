// Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
function sym(args) {
	args = Array.prototype.slice.call(arguments);
	var arr = args.reduce(function(a, b) {
		return a.concat(b);
	});
	var unique = arr.filter(function (e, i, a) {
		return a.indexOf(e) === i && a.lastIndexOf(e) === i; 
	});
	return unique;
}

sym([1, 2, 3], [5, 2, 1, 4]);