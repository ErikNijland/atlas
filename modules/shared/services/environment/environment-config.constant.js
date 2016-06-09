(function () {
    'use strict';

    angular
        .module('dpShared')
        .constant('ENVIRONMENT_CONFIG', {
            DEVELOPMENT: {
                API_ROOT: 'https://api-acc.datapunt.amsterdam.nl/'
            },
            PRODUCTION: {
                API_ROOT: 'https://api.datapunt.amsterdam.nl/'
            }
        });
})();