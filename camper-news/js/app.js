var app = angular.module('CamperNewsApplication', ['ngResource']);

app.factory('Story', ['$resource', function($resource) {
	return $resource('http://www.freecodecamp.com/news/hot/:id');
}]);

app.controller('StoryController', ['$scope', 'Story', function($scope, Story) {
	$scope.stories = [];

	Story.query(function success(data) {
		$scope.stories = data;
	}, function error(data) {
		console.log(data);
	});
}]);