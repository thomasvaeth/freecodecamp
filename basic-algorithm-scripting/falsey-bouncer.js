// Remove all falsey values from an array.
function bouncer(arr) {
	newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === '' || arr[i] === undefined) {

		} else {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

bouncer([7, 'ate', '', false, 9]);