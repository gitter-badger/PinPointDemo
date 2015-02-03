/**
 * Created by skessler on 2/2/15.
 */


(function() {
    'use strict';

    var moduleName = 'pinpoint.navbar',

        angularDependencies = ['ui.router','ui.bootstrap'];

    define([
        'require',
        'angular',
        'ui.router',
        'ui.bootstrap'
    ], function(require, angular, uirouter, uiboostrap) {

        var module = angular.module(moduleName, angularDependencies);

        function NavBarCtrl($scope) {
            $scope.isCollapsed = true;
        }

        module.controller('navProcessing', ['$scope', '$http', '$q', NavBarCtrl]);
        console.log('Nav Bar Loaded');
        return module;
    });
})();
