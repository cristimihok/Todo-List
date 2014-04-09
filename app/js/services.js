'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

// myApp.factory('todoListSvc', function ($resource, $http, $q) {
// 	return {

// 		todo: $resource('data/todo.json', undefined, {query: {method: 'GET', isArray: true}}),

// 		addTodo: function (item) {
// 			this.todo.push(item);
// 		},

// 		getAll: function () {
// 			return $resource('data/todo.json', undefined, {query: {method: 'GET', isArray: true}});

// 			// var dfd = $q.defer();
// 			// $http.get('data/todo.json').success(function (data) {
// 			// 	console.log(dfd);
// 			// 	dfd.resolve(data)
// 			// });
// 			// return dfd.promise;
// 		}
// 	}
// });

myApp.factory('todoListSvc', function ($resource, $http, $q) {

	var todoResource = $resource('data/todo.json', undefined, {query: {method: 'GET', isArray: true}, save: {method: 'POST'}});

	return {

		//Retrieves an empty array. On resolved, it fills and binds the todoResource objects to the $scope
		getAll: function () {
			return todoResource.query();
		},


		//Saves the new todo item and returns a Resource object which will bind to the scope on resolved
		save: function (item) {
			var dfd = $q.defer();
			var newTodo = new todoResource({info: item});
			newTodo.$save()
			// .then(
			// 	function (val) {
			// 		console.log(val);
			// 		dfd.resolve(val);
			// 	},
			// 	function (val) {
			// 		console.log(val);
			// 	}
			// );

			return newTodo;


		}

	}
});


//Interceptor which gets called on every transaction and transforms the request/response as implemented
myApp.factory('myInterceptor', function () {
	return {
		response: function (response) {
			if (response.data instanceof Object)	{//console.log('itercepted response');
				console.log(response);
				return response;
			}

			return response;
		}
	}
});


//Here I register myInterceptor in the angular application
// myApp.config(function ($httpProvider) {
// 	$httpProvider.interceptors.push('myInterceptor');
// });