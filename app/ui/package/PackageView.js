define(function(require) {
    'use strict';
    var PackagePresenter = require('ui/package/PackagePresenter');
    var PackageModel = require('ui/package/PackageModel');
    var BaseView = require('cmvp/views/BaseView');
    var $ = require('jquery');

    function PackageView(di) {
        BaseView.constructor(this, di);
        this._initFn();
        this.rootScope = di.$rootScope;
        this.rootScope.currentPage = 'package';
    }

    PackageView.newInstance = function(di) {
        di.$ = di.$ || $;
        var view = BaseView.newInstance(di, {
            presenter: PackagePresenter,
            model: PackageModel,
            view: PackageView
        });
        return view;
    };

    PackageView.prototype._initFn = function() {
        this.fn.onLoad = this.onLoad.bind(this);
    };

    PackageView.prototype.show = BaseView.methods.show;
    PackageView.prototype.showError = function(error) {
        console.log(error);
    };

    PackageView.prototype.onLoad = function(showBanner) {
        this.event.onLoad();
    };

    PackageView.prototype.onLoaded = function(data) {
        this.data.packages = [
            {image: '/build/assets/images/homepage/large package.png', title: 'Large package', price: '500.000/mo'},
            {image: '/build/assets/images/homepage/small package.png', title: 'Small package', price: '300.000/mo'}
        ];
    };

    return PackageView;
});
