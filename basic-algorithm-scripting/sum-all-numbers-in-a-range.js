// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
	if (arr[1] < arr[0]) arr = [arr[1], arr[0]];
	var sum = 0;
	for (var i = arr[0]; i <= arr[1]; i++) {
		sum += i;
	}
	return sum;
}

sumAll([1, 4]);