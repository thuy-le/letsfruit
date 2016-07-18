define(function() {
    'use strict';

    function About(di) {
        this.di = di;
    }

    About.prototype.getData = function() {
        return { text: 'my initial data' };
    };

    About.newInstance = function(di) {
        di = di || {};
        return new About(di);
    };

    return About;
});
