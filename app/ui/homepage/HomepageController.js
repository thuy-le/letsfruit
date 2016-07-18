define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/homepage/HomepageView');
	function HomepageController($scope, $rootScope) {
		BaseController.constructor(this, {$scope: $scope, $rootScope: $rootScope}, View);
	}
	HomepageController.$inject = ['$scope', '$rootScope'];
    return HomepageController;
});
