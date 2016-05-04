define(function(require) {
    'use strict';
    var PresenterHandlerCreator = require('cmvp/services/PresenterHandlerCreator');
    var EventBus = require('cmvp/services/EventBus');

    function HeaderPresenter(di) {
        this.di = di;
    }

    HeaderPresenter.newInstance = function(di) {
        di = di || {};
        di.eventBus = di.eventBus || EventBus.getInstance();
        return new HeaderPresenter(di);
    };

    HeaderPresenter.prototype.show = function(view, model) {
        var creator = new PresenterHandlerCreator(this, view, model);
        view.event.onLoad = creator.createEventHandler({
            modelMethod: 'getData',
            viewSuccess: 'onLoaded'
        });
    };

    return HeaderPresenter;
});
