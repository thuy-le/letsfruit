define(function(require) {
    'use strict';
    var BannerPresenter = require('ui/banner/BannerPresenter');
    var BannerModel = require('ui/banner/BannerModel');
    var BaseView = require('cmvp/views/BaseView');
    var $ = require('jquery');

    function BannerView(di) {
        BaseView.constructor(this, di);
        this._initFn();
        this._initData();
        this.interval = di.$interval;
        this.scope = di.$scope;
        this.timeout = di.$timeout;
    }

    BannerView.newInstance = function(di) {
        di.$ = di.$ || $;
        var view = BaseView.newInstance(di, {
            presenter: BannerPresenter,
            model: BannerModel,
            view: BannerView
        });
        return view;
    };

    BannerView.prototype._initData = function() {
        this.data.slides = [
            {url: "/build/assets/images/1.png", index: 0},
            {url: "/build/assets/images/2.png", index: 1},
            {url: "/build/assets/images/3.png", index: 2}
        ];
        this.data.static = "/build/assets/images/package_banner.png";
    };

    BannerView.prototype._initFn = function() {
        this.fn.onLoad = this.onLoad.bind(this);
    };

    BannerView.prototype.show = BaseView.methods.show;
    BannerView.prototype.showError = function(error) {
        console.log(error);
    };

    BannerView.prototype.onLoad = function() {
        this.event.onLoad();
    };

    BannerView.prototype.onLoaded = function() {
        var self = this;
        self.data.currentSlide = self.data.slides[0];
        this.interval(function() {
            self.data.showImage = false;
            self.timeout(function() {
                self.data.showImage = true;
            }, 0);
            var index = self.data.currentSlide.index + 1;
            if (index > 2) index = 0;
            self.data.currentSlide = self.data.slides[index];
        }, 2000);
    };

    return BannerView;
});
