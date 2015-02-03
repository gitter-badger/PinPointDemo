/**
 * Created by skessler on 2/2/15.
 */


(function() {
    'use strict';

    var moduleName = 'pinpoint.geoLocation-router',

        angularDependencies = ['ui.router', 'pinpoint.geoLocation'];

    define([
        'require',
        'angular',
        'ui.router',
        './geoLocation'

    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        return module;
    });
})();

