define(function() {
    'use strict';

    function Blog(di) {
        this.di = di;
    }

    Blog.prototype.getData = function() {
        return { text: 'my initial data' };
    };

    Blog.newInstance = function(di) {
        di = di || {};
        return new Blog(di);
    };

    return Blog;
});
