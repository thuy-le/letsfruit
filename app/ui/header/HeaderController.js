define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/header/HeaderView');
	function HeaderController($scope) {
		BaseController.constructor(this, {$scope: $scope}, View);
	}
    return HeaderController;
});
