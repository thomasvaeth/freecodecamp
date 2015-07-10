// Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
	var findArray = str.split(' ');
	findArray.sort(function (a, b) {
		return b.length - a.length;
	});
	return findArray[0].length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');