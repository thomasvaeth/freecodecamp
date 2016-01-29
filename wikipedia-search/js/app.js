var app = angular.module('WikipediaApplication', []);

app.controller('WikipediaController', ['$scope', '$http', function($scope, $http) {
	$scope.results = [];
}]);
