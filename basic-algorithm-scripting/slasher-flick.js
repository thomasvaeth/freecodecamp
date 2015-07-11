// Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
	for (var i = howMany - 1; i >= 0; i--) {
		arr.shift(i);
	}
	return arr;
}

slasher([1, 2, 3], 2);