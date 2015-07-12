// Return the provided string with the first letter of each word capitalized.

function titleCase(str) {
	var arr = str.toLowerCase().split(' ');
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		var word = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
		newArr.push(word);
	}
	return newArr.join(' ');
}

titleCase("I'm a little tea pot");