define(function(require) {
    'use strict';
    var BlogPresenter = require('ui/blog/BlogPresenter');
    var BlogModel = require('ui/blog/BlogModel');
    var BaseView = require('cmvp/views/BaseView');
    var $ = require('jquery');

    function BlogView(di) {
        BaseView.constructor(this, di);
        this._initFn();
        this.rootScope = di.$rootScope;
        this.rootScope.currentPage = 'blog';
    }

    BlogView.newInstance = function(di) {
        di.$ = di.$ || $;
        var view = BaseView.newInstance(di, {
            presenter: BlogPresenter,
            model: BlogModel,
            view: BlogView
        });
        return view;
    };

    BlogView.prototype._initFn = function() {
        this.fn.onLoad = this.onLoad.bind(this);
    };

    BlogView.prototype.show = BaseView.methods.show;
    BlogView.prototype.showError = function(error) {
        console.log(error);
    };

    BlogView.prototype.onLoad = function(showBanner) {
        this.event.onLoad();
    };

    BlogView.prototype.onLoaded = function(data) {
        this.data.blogs = [
            {}
        ];
        this.data.recent = []
    };

    return BlogView;
});
