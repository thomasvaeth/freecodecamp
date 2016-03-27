// Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).
function every(collection, pre) {
	for (var i = 0; i < collection.length; i++) {
		return collection[i].hasOwnProperty(pre) ? true : false;
	}
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');