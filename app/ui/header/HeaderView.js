define(function(require) {
    'use strict';
    var HeaderPresenter = require('ui/header/HeaderPresenter');
    var HeaderModel = require('ui/header/HeaderModel');
    var BaseView = require('cmvp/views/BaseView');
    var $ = require('jquery');

    function HeaderView(di) {
        BaseView.constructor(this, di);
        this._initFn();
    }

    HeaderView.newInstance = function(di) {
        di.$ = di.$ || $;
        var view = BaseView.newInstance(di, {
            presenter: HeaderPresenter,
            model: HeaderModel,
            view: HeaderView
        });
        return view;
    };

    HeaderView.prototype._initFn = function() {
        this.fn.onLoad = this.onLoad.bind(this);
    };

    HeaderView.prototype.show = BaseView.methods.show;
    HeaderView.prototype.showError = function(error) {
        console.log(error);
    };

    HeaderView.prototype.onLoad = function(showBanner) {
        this.data.showBanner = showBanner;
        this.event.onLoad();
    };

    HeaderView.prototype.onLoaded = function(data) {
        this.data.images = [
            {image: '/build/assets/images/homepage/apple.png', title: 'apple', price: '35.000/kg'},
            {image: '/build/assets/images/homepage/grape.png', title: 'grape', price: '35.000/kg'},
            {image: '/build/assets/images/homepage/guava.png', title: 'guava', price: '35.000/kg'},
            {image: '/build/assets/images/homepage/logan.png', title: 'logan', price: '35.000/kg'},
            {image: '/build/assets/images/homepage/mango.png', title: 'mango', price: '35.000/kg'},
            {image: '/build/assets/images/homepage/mangosteen.png', title: 'mangosteen', price: '35.000/kg'},
            {image: '/build/assets/images/homepage/orange.png', title: 'orange', price: '35.000/kg'},
            {image: '/build/assets/images/homepage/peach.png', title: 'peach', price: '35.000/kg'},
            {image: '/build/assets/images/homepage/watermelon.png', title: 'watermelon', price: '35.000/kg'}
        ];
        this.data.packages = [
            {image: '/build/assets/images/homepage/large package.png', title: 'Large package', price: '500.000/mo'},
            {image: '/build/assets/images/homepage/small package.png', title: 'Small package', price: '300.000/mo'}
        ];
    };

    return HeaderView;
});
