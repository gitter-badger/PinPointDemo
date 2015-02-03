/**
 * Created by skessler on 2/2/15.
 */


(function() {
    'use strict';

    var moduleName = 'pinpoint.geo-router',
        angularDependencies = ['ui.router', 'pinpoint.geo'];

    define([
        'require',
        'angular',
        'ui.router',
        './geo-location'

    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        return module;
    });
})();
