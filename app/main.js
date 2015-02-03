/**
 * Created by skessler on 2/2/15.
 */
require.config({
    paths: {
        'angular': '../node_modules/angular/angular',
        'ui.bootstrap' : '../node_modules/angular-bootstrap/dist/ui-bootstrap',
        'ui.router': '../node_modules/angular-ui-router/release/angular-ui-router'
    },
    // 'Shims' are required for 3rd party libs that don't use some sort of AMD/CommonJS/UMD module definition
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui.bootstrap': ['angular'],
        'ui.router': ['angular']
    }
});

/* Dont touch this unless you really need to */
require(['angular', 'pinpoint'], function() {
    console.log('Require Configured, pinpoint loaded, bootstrapping angular app');
    angular.bootstrap(document.querySelector('html'),['pinpoint']);
});
