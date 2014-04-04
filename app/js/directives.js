'use strict';

/* Directives */


myApp.directive('todoList', function (todoListSvc) {
	return {
		restrict: 'E',

		templateUrl: 'partials/todo.html',

		scope: {},

		link: function (scope, elem, attrs) { },

		controller: function($scope) {
			//todo: list of strings
			$scope.todo = todoListSvc.getAll();
			//console.log($scope.todo);
			$scope.addTodo = function(item) {
				todoListSvc.addTodo(item);
				console.log($scope.todo);

			}
		}
	}
});




myApp.directive('onEnter', function () {

	return {
		restrict: 'A',

		scope: {
			onEnter: '&' //get refference to the function passed to on-enter attribute (the argumets are included too)
		},

		link: function (scope, elem, attrs) {

			elem.keypress(function (event) {
				var keycode = (event.keyCode ? event.keyCode : event.which);
				console.log(keycode);

				//if key pressed is Enter then call the function passed from parent scope
				if (keycode === 13) {
					scope.$apply(scope.onEnter());
				}
			});
		}
	}
});