define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/blog/BlogView');
	function BlogController($scope, $rootScope) {
		BaseController.constructor(this, {$scope: $scope, $rootScope: $rootScope}, View);
	}
	BlogController.$inject = ['$scope', '$rootScope'];
    return BlogController;
});
