define(function() {
    'use strict';

    function Homepage(di) {
        this.di = di;
    }

    Homepage.prototype.getData = function() {
        return { text: 'my initial data' };
    };

    Homepage.newInstance = function(di) {
        di = di || {};
        return new Homepage(di);
    };

    return Homepage;
});
