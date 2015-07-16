// Return a new array that transforms the element's average altitude into their orbital periods.
function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	function calculation(orbit) {
		return Math.round((2 * Math.PI) * Math.sqrt(Math.pow(orbit + earthRadius, 3) / GM));
	}
	return arr.map(function(space) {
		space.orbitalPeriod = calculation(space.avgAlt);
		delete space.avgAlt;
		return space;
	});
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);