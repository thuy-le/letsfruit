/**
 * Created by apium on 15/07/15.
 */
define([
    'framework'
], function(ApplicationFactory) {

    /** AngularJS App Configuration **/
    function AngularConfig($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $routeProvider
            .when('/model/:modelId', {templateUrl: '/templates/homepage.html'})
            .when('/about', {templateUrl: '/templates/about.html'})
            .when('/fruit', {templateUrl: '/templates/fruit.html'})
            .when('/package', {templateUrl: '/templates/package.html'})
            .when('/blog', {templateUrl: '/templates/blog.html'})
            .when('/signup', {templateUrl: '/templates/signup.html'})
            .when('/blog-detail', {templateUrl: '/templates/blogDetail.html'})
            .when('/fruit-detail', {templateUrl: '/templates/fruitDetail.html'})
            .otherwise({templateUrl: '/templates/homepage.html'});
    }

    AngularConfig.$inject = [ '$routeProvider', '$locationProvider'];

    /** Application Building **/
    var app = ApplicationFactory.newRequireApplication('RequireJS')
        .composedWith(ApplicationFactory.newAngularApplication('AngularApp', [
            'ngRoute', 'ngAnimate'
        ], AngularConfig));

    app.manifest = {
        authors: [ 'apiumtech' ],
        version: 0.1,
        src: [
            'ui/header/HeaderController',
            'ui/banner/BannerController',
            'ui/homepage/HomepageController',
            'ui/fruit/FruitController',
            'ui/about/AboutController',
            'ui/package/PackageController',
            'ui/blog/BlogController'
        ]
    };

    /** Application basic configuration **/
    app.registerObject({name: 'SourceList', dependencies: app.manifest.src}, function() {
        return app.manifest.src;
    });

    app.registerObject({name: 'Application', dependencies: ['SourceList']}, function() {
        return app;
    });

    return app;

});
