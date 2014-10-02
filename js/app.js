var app = angular.module('chucknorris', []);

app.factory('quotes', [function() {
	var q = {
		quotes: ["Chuck Norris Quote", "Another Chuck Norris Quote"]
	};
	return q;
}])



app.controller('getRandomFact', ['$scope', 'quotes', function($scope, $http) {
	$scope.quotes = quotes.quotes
	$scope.getQuote = function() {
		$http.get('http://api.icndb.com/jokes/random?firstName='+$scope.person.first_name+'&lastName='+$scope.person.last_name).
			success(function(data, status) {
				$scope.quote = data.value.joke;
			}).error(function(data,status) {
				$scope.quote = 'Sorry, Chuck Norris is busy right now.';
			});
		}

	// $scope.quotes = quotes.quotes;
	// $scope.saveQuote = function() {
	// 	$scope.quotes.push($scope.quote);
	// }
}]);	

