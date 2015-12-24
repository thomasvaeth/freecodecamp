var app = angular.module('CalculatorApplication', []);

app.controller('CalculatorController', ['$scope', function($scope) {
	var previousNum = 0;
	var previousOp = false;

	$scope.clear = function() {
		$scope.display = '0';
		$scope.operator = false;
		previousNum = '0';
		previousOp = false;
	}

	$scope.sign = function() {
		$scope.display = parseFloat($scope.display) * -1;
	}

	$scope.percent = function() {
		$scope.display = parseFloat($scope.display) / 100;
	}

	$scope.setOperator = function(operation) {
		var current = parseFloat($scope.display);
		var previous = parseFloat(previousNum);

		if (previousOp === '/') {
			current = previous / current;
		} else if (previousOp === '*') {
			current *= previous;
		} else if (previousOp === '-') {
			current = previous - current;
		} else if (previousOp === '+') {
			current += previous;
		}

		previousNum = current;
		$scope.display = current;
		$scope.operator = operation;
		previousOp = false;
	}

	$scope.number = function(num) {
		if ($scope.operator) {
			previousNum = $scope.display;
			$scope.display = '';
			previousOp = $scope.operator;
			$scope.operator = false;
		}

		if (num === '.' && $scope.display.indexOf('.') !== -1) {
			return;
		}

		if ($scope.display === '0') {
			$scope.display = '';
		}

		$scope.display += num;
	}

	$scope.clear();
}]);