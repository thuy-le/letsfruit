/**
 * Created by kevin on 12/9/14.
 */
module.exports = function(grunt) {
    'use strict';

    return {
        main: {
            expand: true,
            src: ['assets/vendors/**/*', 'assets/images/**/*'],
            dest: 'build/'
        }
    };
};
