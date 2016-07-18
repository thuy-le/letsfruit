define(function(require) {
    'use strict';
    var AboutPresenter = require('ui/about/AboutPresenter');
    var AboutModel = require('ui/about/AboutModel');
    var BaseView = require('cmvp/views/BaseView');
    var $ = require('jquery');

    function AboutView(di) {
        BaseView.constructor(this, di);
        this._initFn();
        this.rootScope = di.$rootScope;
        this.rootScope.currentPage = 'about';
    }

    AboutView.newInstance = function(di) {
        di.$ = di.$ || $;
        var view = BaseView.newInstance(di, {
            presenter: AboutPresenter,
            model: AboutModel,
            view: AboutView
        });
        return view;
    };

    AboutView.prototype._initFn = function() {
        this.fn.onLoad = this.onLoad.bind(this);
    };

    AboutView.prototype.show = BaseView.methods.show;
    AboutView.prototype.showError = function(error) {
        console.log(error);
    };

    AboutView.prototype.onLoad = function(showBanner) {
        this.event.onLoad();
    };

    AboutView.prototype.onLoaded = function(data) {
        this.data.images = [
            {image: '/build/assets/images/about/apple.png', title: 'apple', price: '35.000/kg'},
            {image: '/build/assets/images/about/banana.png', title: 'banana', price: '35.000/kg'},
            {image: '/build/assets/images/about/dragon.png', title: 'dragon', price: '35.000/kg'},
            {image: '/build/assets/images/about/durian.png', title: 'durian', price: '35.000/kg'},
            {image: '/build/assets/images/about/grape about.png', title: 'grape about', price: '35.000/kg'},
            {image: '/build/assets/images/about/grape.png', title: 'grape', price: '35.000/kg'},
            {image: '/build/assets/images/about/guava.png', title: 'guava', price: '35.000/kg'},
            {image: '/build/assets/images/about/logan.png', title: 'logan', price: '35.000/kg'},
            {image: '/build/assets/images/about/mandarin.png', title: 'mandarin', price: '35.000/kg'},
            {image: '/build/assets/images/about/mango.png', title: 'mango', price: '35.000/kg'},
            {image: '/build/assets/images/about/mangosteen.png', title: 'mangosteen', price: '35.000/kg'},
            {image: '/build/assets/images/about/melon.png', title: 'melon', price: '35.000/kg'},
            {image: '/build/assets/images/about/orange.png', title: 'orange', price: '35.000/kg'},
            {image: '/build/assets/images/about/papaya.png', title: 'papaya', price: '35.000/kg'},
            {image: '/build/assets/images/about/rambutan.png', title: 'rambutan', price: '35.000/kg'},
            {image: '/build/assets/images/about/star apple.png', title: 'star apple', price: '35.000/kg'},
            {image: '/build/assets/images/about/strawberry.png', title: 'strawberry', price: '35.000/kg'},
            {image: '/build/assets/images/about/watermelon.png', title: 'watermelon', price: '35.000/kg'},
        ];
    };

    return AboutView;
});
