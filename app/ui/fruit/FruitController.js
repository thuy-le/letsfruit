define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/fruit/FruitView');
	function FruitController($scope, $rootScope) {
		BaseController.constructor(this, {$scope: $scope, $rootScope: $rootScope}, View);
	}
	FruitController.$inject = ['$scope', '$rootScope'];
    return FruitController;
});
