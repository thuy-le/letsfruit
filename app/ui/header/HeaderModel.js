define(function() {
    'use strict';

    function Header(di) {
        this.di = di;
    }

    Header.prototype.getData = function() {
        return { text: 'my initial data' };
    };

    Header.newInstance = function(di) {
        di = di || {};
        return new Header(di);
    };

    return Header;
});
