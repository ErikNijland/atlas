(function () {
    angular
        .module('dpDataSelection')
        .factory('dataSelectionApi', dataSelectionApiFactory);

    dataSelectionApiFactory.$inject = ['dataSelectionConfig', 'api'];

    function dataSelectionApiFactory (dataSelectionConfig, api) {
        return {
            query: query
        };

        function query (dataset, activeFilters, page) {
            var searchParams = angular.merge(
                {
                    page: page
                },
                activeFilters
            );

            return api.getByUrl(dataSelectionConfig[dataset].ENDPOINT_PREVIEW, searchParams).then(function (data) {
                return {
                    number_of_pages: data.page_count,
                    filters: formatFilters(dataset, data.aggs_list),
                    tableData: formatTableData(dataset, data.object_list)
                };
            });
        }

        function formatFilters (dataset, rawData) {
            var formattedFilters = angular.copy(dataSelectionConfig[dataset].FILTERS);

            return formattedFilters.filter(function (filter) {
                //Only show the filters that are returned by the API
                return angular.isObject(rawData[filter.slug]);
            }).map(function (filter) {
                //Add all the available options for each filter
                filter.options = rawData[filter.slug].buckets.map(function (option) {
                    return {
                        label: option.key,
                        count: option.doc_count
                    };
                });

                //Note: filter.options is limited to 100 results
                filter.numberOfOptions = rawData[filter.slug].doc_count;

                return filter;
            });
        }

        function formatTableData (dataset, rawData) {
            var tableHead,
                tableBody;

            tableHead = dataSelectionConfig[dataset].FIELDS.map(function (field) {
                return field.label;
            });

            tableBody = rawData.map(function (rawDataRow) {
                var detailEndpoint;

                detailEndpoint = dataSelectionConfig[dataset].ENDPOINT_DETAIL;
                detailEndpoint += rawDataRow[dataSelectionConfig[dataset].PRIMARY_KEY];
                detailEndpoint += '/';

                return {
                    detailEndpoint: detailEndpoint,
                    fields: dataSelectionConfig[dataset].FIELDS.map(function (field) {
                        return rawDataRow[field.slug];
                    })
                };
            });

            return {
                head: tableHead,
                body: tableBody
            };
        }
    }
})();
