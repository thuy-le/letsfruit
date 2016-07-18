define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/about/AboutView');
	function AboutController($scope, $rootScope) {
		BaseController.constructor(this, {$scope: $scope, $rootScope: $rootScope}, View);
	}
	AboutController.$inject = ['$scope', '$rootScope'];
    return AboutController;
});
