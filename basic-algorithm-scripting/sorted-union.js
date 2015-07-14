// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function unite(arr1, arr2, arr3) {
	var newArr = arr1.concat(arr2).concat(arr3);
	var uniqueNum = newArr.filter(function (num, pos) {
		return newArr.indexOf(num) === pos; 
	});
	return uniqueNum;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);