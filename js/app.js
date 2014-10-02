var app = angular.module('chucknorris', []);

app.factory('quotes', [function() {
	var q = {
		quotes: []
	};
	return q;
}]);

app.controller('getRandomFact', ['$scope', '$http', 'quotes', function($scope, $http, quotes) {

	$scope.getChuckQuote = function() {
		$http.get('http://api.icndb.com/jokes/random').
			success(function(data, status) {
				$scope.quote = data.value.joke;
			}).error(function(data,status) {
				$scope.quote = "Sorry, Chuck Norris is busy right now";
			});
	}

	$scope.getCustomQuote = function() {
		$http.get('http://api.icndb.com/jokes/random?firstName='+$scope.person.first_name+'&lastName='+$scope.person.last_name).
			success(function(data, status) {
				$scope.quote = data.value.joke;
			}).error(function(data,status) {
				$scope.quote = 'Sorry, Chuck Norris is busy right now.';
			});
		}

	$scope.saveQuote = function() {
		quotes.quotes.push($scope.quote);
	}
}]);

app.controller('showQuotes', ['$scope', 'quotes', function($scope, quotes) {
	$scope.quotes = quotes.quotes;

}]);