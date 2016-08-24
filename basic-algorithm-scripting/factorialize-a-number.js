// Return the factorial of the provided integer.
function factorialize(num) {
	var total = num;
	if (num === 0) {
		return 1;
	} else {
		for (var i = 1; i < num; i++) {
			total *= i;
		}
		return total;
	}
}

factorialize(5, '');