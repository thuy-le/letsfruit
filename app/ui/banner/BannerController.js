define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/banner/BannerView');
	function BannerController($scope, $interval, $timeout) {
		BaseController.constructor(this, {$scope: $scope, $interval: $interval, $timeout: $timeout}, View);
	}
	BannerController.$inject = ['$scope', '$interval', '$timeout'];
    return BannerController;
});
