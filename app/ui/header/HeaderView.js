define(function(require) {
    'use strict';
    var HeaderPresenter = require('ui/header/HeaderPresenter');
    var HeaderModel = require('ui/header/HeaderModel');
    var BaseView = require('cmvp/views/BaseView');
    var $ = require('jquery');

    function HeaderView(di) {
        BaseView.constructor(this, di);
        this._initFn();
        $(document).ready(function() {
            $('.bxslider').bxSlider({
                auto: true,
                autoControls: true,
                controls: false,
                pager: false
            });
        });
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

    HeaderView.prototype.onLoad = function() {
        this.event.onLoad();
    };

    HeaderView.prototype.onLoaded = function(data) {
        this.data.images = [
            {image: '/build/assets/images/fruits/19.png', title: 'orange', price: '35.000/kg'},
            {image: '/build/assets/images/fruits/20.png', title: 'grape', price: '35.000/kg'},
            {image: '/build/assets/images/fruits/21.png', title: 'mango', price: '35.000/kg'},
        ];
        this.data.packages = [
            {image: '/build/assets/images/fruits/19.png', title: 'Deluxe', price: '350.000/mo'},
            {image: '/build/assets/images/fruits/20.png', title: 'Healthy', price: '150.000/mo'}
        ];
    };

    return HeaderView;
});
