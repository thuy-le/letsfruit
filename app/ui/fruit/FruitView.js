define(function(require) {
    'use strict';
    var FruitPresenter = require('ui/fruit/FruitPresenter');
    var FruitModel = require('ui/fruit/FruitModel');
    var BaseView = require('cmvp/views/BaseView');
    var $ = require('jquery');

    function FruitView(di) {
        BaseView.constructor(this, di);
        this._initFn();
        this.rootScope = di.$rootScope;
        this.rootScope.currentPage = 'fruit';
    }

    FruitView.newInstance = function(di) {
        di.$ = di.$ || $;
        var view = BaseView.newInstance(di, {
            presenter: FruitPresenter,
            model: FruitModel,
            view: FruitView
        });
        return view;
    };

    FruitView.prototype._initFn = function() {
        this.fn.onLoad = this.onLoad.bind(this);
    };

    FruitView.prototype.show = BaseView.methods.show;
    FruitView.prototype.showError = function(error) {
        console.log(error);
    };

    FruitView.prototype.onLoad = function(showBanner) {
        this.event.onLoad();
    };

    FruitView.prototype.onLoaded = function(data) {
        this.data.images = [
            {image: '/build/assets/images/fruit/apple.png', title: 'apple', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/banana.png', title: 'banana', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/dragon.png', title: 'dragon', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/durian.png', title: 'durian', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/grape fruit.png', title: 'grape fruit', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/grape.png', title: 'grape', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/guava.png', title: 'guava', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/logan.png', title: 'logan', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/mandarin.png', title: 'mandarin', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/mango.png', title: 'mango', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/mangosteen.png', title: 'mangosteen', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/melon.png', title: 'melon', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/orange.png', title: 'orange', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/papaya.png', title: 'papaya', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/rambutan.png', title: 'rambutan', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/star apple.png', title: 'star apple', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/strawberry.png', title: 'strawberry', price: '35.000/kg'},
            {image: '/build/assets/images/fruit/watermelon.png', title: 'watermelon', price: '35.000/kg'},
        ];
    };

    return FruitView;
});
