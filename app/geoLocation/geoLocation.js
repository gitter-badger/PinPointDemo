/**
 * Created by skessler on 12/2/14.
 */

(function() {
    'use strict';

    var moduleName = 'pinpoint.geoLocation',
        angularDependencies = ['ui.router', 'pinpoint.geoLocation-router'];

    define([
        'require',
        'angular',
        'ui.router'
    ], function(require, angular, uirouter) {

        var module = angular.module(moduleName, angularDependencies);

        function mapCtrl($scope, $http, $q) {
        
        }


            console.log('pinpoint has loaded the mao!');

        module.controller('mapCtrl', ['$scope', '$http', '$q', mapCtrl]);

        return module;
    });
})();
