// Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
function sym(args) {
	var arr = Array.prototype.slice.call(arguments);
	return arr.reduce(function(arrFirst, arrNext) {
		var one = arrFirst.filter(function(a) {
			return arrNext.indexOf(a) === -1;
		});
		var two = arrNext.filter(function(a) {
			return arrFirst.indexOf(a) === -1;
		});
		return one.concat(two);
	}).reduce(function(a,b) {
		if(a.indexOf(b) < 0) {
			a.push(b);
		}
		return a;
	}, []);
}

sym([1, 2, 3], [5, 2, 1, 4]);