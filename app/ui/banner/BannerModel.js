define(function() {
    'use strict';

    function Banner(di) {
        this.di = di;
    }

    Banner.prototype.getData = function() {
        return { text: 'my initial data' };
    };

    Banner.newInstance = function(di) {
        di = di || {};
        return new Banner(di);
    };

    return Banner;
});
