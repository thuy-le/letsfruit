requirejs.config({
    'baseUrl': '/app',
    'paths': {
        'lodash': '../node_modules/postal/node_modules/lodash/dist/lodash.min',
        'conduitjs': '../node_modules/postal/node_modules/conduitjs/lib/conduit.min',
        'angular-route': '../node_modules/angular-route/angular-route.min',
        'angular-bootstrap': '../node_modules/angular-bootstrap/ui-bootstrap.min',
        'angular': '../node_modules/angular/angular.min',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'postal': '../node_modules/postal/lib/postal.min',
        'q': '../node_modules/q/q',
        'framework': '../node_modules/cmvp-framework/src/ApplicationFactory',
        'cmvp': '../node_modules/cmvp-framework/src/cmvp',
        'meld': '../node_modules/meld/meld',
        'slider': '../assets/vendors/jquery.bxslider.min',
        'easing': '../node_modules/jquery.easing/jquery.easing.min',
        'angular-animate': '../node_modules/angular-animate/angular-animate.min'
    },

    'shim': {
        'angular': {
            exports: 'angular'
        },

        'angular-animate': {
            deps: [ 'angular' ],
            exports: 'angular-animate'
        },

        'angular-route': {
            deps: [ 'angular' ],
            exports: 'angular-route'
        },
        'angular-bootstrap': {
            deps: [ 'angular' ],
            exports: 'angular-bootstrap'
        },
        'jquery': {
            exports: '$'
        },

        'framework': {
            deps: ['angular'],
            exports: 'ApplicationFactory'
        },

        'postal': {
            exports: 'postal'
        },

        'easing': {
            deps: ['jquery'],
            exports: 'easing'
        },

        'slider': {
            deps: ['jquery', 'easing'],
            exports: 'slider'
        }
    },

    'deps': ['main', 'angular', 'angular-route', 'angular-animate', 'angular-bootstrap', 'jquery', 'q', 'postal', 'meld', 'framework', 'slider', 'easing'],
    'callback': function() {
        require(['main']);
    },
    // for requirejs compilation:
    'include': [
        'lodash', 'angular-animate', 'angular-route', 'angular-bootstrap', 'angular', 'jquery', 'postal', 'q', 'slider', 'easing',
        'framework',
        'cmvp/services/EventBus', 'cmvp/services/AjaxService', 'cmvp/aspects/ViewRepaintAspect',
        'ui/header/HeaderModel.js',
        'ui/header/HeaderView.js',
        'ui/header/HeaderPresenter.js',
        'ui/header/HeaderController.js',
        'ui/banner/BannerModel.js',
        'ui/banner/BannerView.js',
        'ui/banner/BannerPresenter.js',
        'ui/banner/BannerController.js',
        'ui/homepage/HomepageModel.js',
        'ui/homepage/HomepageView.js',
        'ui/homepage/HomepagePresenter.js',
        'ui/homepage/HomepageController.js',
        'ui/fruit/FruitModel.js',
        'ui/fruit/FruitView.js',
        'ui/fruit/FruitPresenter.js',
        'ui/fruit/FruitController.js',
        'ui/about/AboutModel.js',
        'ui/about/AboutView.js',
        'ui/about/AboutPresenter.js',
        'ui/about/AboutController.js',
        'ui/package/PackageModel.js',
        'ui/package/PackageView.js',
        'ui/package/PackagePresenter.js',
        'ui/package/PackageController.js',
        'ui/blog/BlogModel.js',
        'ui/blog/BlogView.js',
        'ui/blog/BlogPresenter.js',
        'ui/blog/BlogController.js',
        //CMVP-SCRIPT-PLACEHOLDER
        'main'
    ]
});

