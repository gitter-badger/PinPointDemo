/**
 * Created by skessler on 2/2/15.
 */


(function() {
    'use strict';

    var moduleName = 'pinpoint.router',

        angularDependencies = ['ui.router'];

    define([
        'require',
        'angular',
        'ui.router'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider

                // HOME STATES AND NESTED VIEWS ========================================
/*                .state('home', {
                    url: '/home',
                    templateUrl: require.toUrl('./home/_home.html')
                })*/
        });

        return module;
    });
})();