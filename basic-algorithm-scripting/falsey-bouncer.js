// Remove all falsey values from an array.
function bouncer(arr) {
	newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) newArr.push(arr[i]);
	}
	return newArr;
}

bouncer([7, 'ate', '', false, 9]);