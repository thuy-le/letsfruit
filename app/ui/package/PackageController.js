define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/package/PackageView');
	function PackageController($scope, $rootScope) {
		BaseController.constructor(this, {$scope: $scope, $rootScope: $rootScope}, View);
	}
	PackageController.$inject = ['$scope', '$rootScope'];
    return PackageController;
});
