/**
 * Created by skessler on 2/2/15.
 */


(function() {
    'use strict';

    var moduleName = 'pinpoint.router',
        angularDependencies = ['ui.router', 'pinpoint.geo-router', 'pinpoint.navbar'];

    define([
        'require',
        'angular',
        'ui.router',
        './geo-location/geo-router',
        '../navbar'

    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        return module;
    });
})();
