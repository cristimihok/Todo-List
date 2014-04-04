'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

myApp.factory('todoListSvc', function ($resource) {
	return {

		todo: ['1', '2', '3', '4'],

		addTodo: function (item) {
			this.todo.push(item);
		},

		getAll: function () {
			return $resource('data/todo.json', {}, {query: {method: 'GET', isArray: true}}).query();
			// return this.todo;
		}
	}
});

myApp.factory('myInterceptor', function ($q) {
	return {
		response: function (response) {
			if (response.data instanceof Array)	{//console.log('itercepted response');
				console.log(response);
				return response.data;
			}

			return response;
		}
	}
});

myApp.config(function ($httpProvider) {
	$httpProvider.interceptors.push('myInterceptor');
});