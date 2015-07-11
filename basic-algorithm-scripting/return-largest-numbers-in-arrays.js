// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
var order = function(a, b) {
	return a-b;
};

function largestOfFour(arr) {
	var newArr = [];
	var reverseOrder = 0;
	for (var i = 0; i < arr.length; i++) {
		reverseOrder = arr[i].sort(order).reverse();
		reverseOrder = reverseOrder[0];
		newArr.push(reverseOrder);
	}
	return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);