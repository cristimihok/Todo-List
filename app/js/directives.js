'use strict';

/* Directives */


myApp.directive('todoList', function (todoListSvc) {
	return {

		restrict: 'E',

		templateUrl: 'partials/todo.html',

		scope: {},

		link: function (scope, elem, attrs) { },

		controller: function($scope) {

			$scope.todo = todoListSvc.getAll();

			$scope.addTodo = function(item) {
				if (item) $scope.todo.push(todoListSvc.save(item));
				debugger;
			}
		}

	}//return service object
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

				//if key pressed is Enter then call the function passed from parent scope
				if (keycode === 13) {
					//scope.$apply(scope.onEnter());
					scope.onEnter();
				}
			});
		}
	}
});