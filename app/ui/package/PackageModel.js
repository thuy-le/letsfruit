define(function() {
    'use strict';

    function Package(di) {
        this.di = di;
    }

    Package.prototype.getData = function() {
        return { text: 'my initial data' };
    };

    Package.newInstance = function(di) {
        di = di || {};
        return new Package(di);
    };

    return Package;
});
