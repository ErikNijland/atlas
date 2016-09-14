(function () {
    'use strict';

    angular
        .module('dpDataSelection')
        .factory('dataSelectionConfig', dataSelectionConfigFactory);

    dataSelectionConfigFactory.$inject = ['environment'];

    function dataSelectionConfigFactory (environment) {
        var globalConfig,
            envConfig;

        envConfig = {
            DEVELOPMENT: {
                bag: {
                    ENDPOINT_PREVIEW: 'https://api-acc.datapunt.amsterdam.nl/zelfbediening/bag/',
                    ENDPOINT_EXPORT: 'https://api-acc.datapunt.amsterdam.nl/zelfbediening/bag/export/',
                    ENDPOINT_DETAIL: 'https://api-acc.datapunt.amsterdam.nl/bag/nummeraanduiding/'
                }
            },
            PRODUCTION: {
                bag: {
                    ENDPOINT_PREVIEW: 'https://api.datapunt.amsterdam.nl/zelfbediening/bag/',
                    ENDPOINT_EXPORT: 'https://api.datapunt.amsterdam.nl/zelfbediening/bag/export/',
                    ENDPOINT_DETAIL: 'https://api.datapunt.amsterdam.nl/bag/nummeraanduiding/'
                }
            }
        };
        globalConfig = {
            bag: {
                PRIMARY_KEY: 'id',
                FILTERS: [
                    {
                        slug: 'stadsdeel_naam',
                        label: 'Stadsdelen'
                    }, {
                        slug: 'buurtcombinatie_naam',
                        label: 'Buurtcombinaties'
                    }, {
                        slug: 'buurt_naam',
                        label: 'Buurten'
                    }, {
                        slug: 'naam',
                        label: 'Straatnamen'
                    }, {
                        slug: 'postcode',
                        label: 'Postcode'
                    }, {
                        slug: 'ggw_naam',
                        label: 'Gebiedsgerichtwerken gebieden'
                    }
                ],
                FIELDS: [
                    {
                        slug: 'stadsdeel_naam',
                        label: 'Stadsdeel naam'
                    },
                    {
                        slug: 'stadsdeel_code',
                        label: 'Stadsdeel code'
                    },
                    {
                        slug: 'ggw_naam',
                        label: 'Gebiedsnaam (gebiedsgerichtwerken)'
                    },
                    {
                        slug: 'ggw_code',
                        label: 'Gebiedsnaam code'
                    },
                    {
                        slug: 'buurtcombinatie_naam',
                        label: 'Wijknaam (buurtcombinatie)'
                    },
                    {
                        slug: 'buurtcombinatie_code',
                        label: 'Wijk volledige code'
                    },
                    {
                        slug: 'buurt_naam',
                        label: 'Buurtnaam'
                    },
                    {
                        slug: 'buurt_code',
                        label: 'Buurt volledige code'
                    },
                    {
                        slug: '_openbare_ruimte_naam',
                        label: 'Straatnaam (openbare ruimte naam)'
                    },
                    {
                        slug: 'huisnummer',
                        label: 'Huisnummer'
                    },
                    {
                        slug: 'huisnummer_toevoeging',
                        label: 'Huisnummer Toevoeging'
                    },
                    {
                        slug: 'huisletter',
                        label: 'Huisnummer letter'
                    },
                    {
                        slug: 'postcode',
                        label: 'Postcode'
                    }
                ]
            }
        };
        return angular.merge(globalConfig, envConfig[environment.NAME]);
    }
})();