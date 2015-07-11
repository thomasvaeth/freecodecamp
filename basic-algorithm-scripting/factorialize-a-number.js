// Return the factorial of the provided integer.
function factorialize(num) {
	var total = num;
	for (var i = num - 1; i > 0; i--) {
		total *= i;
		console.log(total);
	}
	return total;
}

factorialize(5);