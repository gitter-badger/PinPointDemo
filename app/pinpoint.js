/**
 * Created by skessler on 2/2/15.
 */

(function() {
    'use strict';

    var moduleName = 'pinpoint',
        angularDependencies = ['pinpoint.router'];

    define([
        'require',
        'angular',
        './router'

    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);
        module.controller('MyController', ['$scope']);
        return module;
    });
})();
