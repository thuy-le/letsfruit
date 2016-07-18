define(function() {
    'use strict';

    function Fruit(di) {
        this.di = di;
    }

    Fruit.prototype.getData = function() {
        return { text: 'my initial data' };
    };

    Fruit.newInstance = function(di) {
        di = di || {};
        return new Fruit(di);
    };

    return Fruit;
});
