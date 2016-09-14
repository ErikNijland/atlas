(function () {
    'use strict';

    angular
        .module('dpDataSelection')
        .component('dpDataSelectionDownloadButton', {
            bindings: {
                dataset: '@',
                activeFilters: '='
            },
            templateUrl: 'modules/data-selection/components/download-button/download-button.html',
            controller: DpDataSelectionDownloadButtonController,
            controllerAs: 'vm'
        });

    DpDataSelectionDownloadButtonController.$inject = ['$scope', '$window', 'dataSelectionConfig'];

    function DpDataSelectionDownloadButtonController ($scope, $window, dataSelectionConfig) {
        var vm = this,
            filterParams = [];

        vm.downloadUrl = dataSelectionConfig[vm.dataset].ENDPOINT_EXPORT;

        dataSelectionConfig[vm.dataset].FILTERS.forEach(function (filter) {
            if (angular.isString(vm.activeFilters[filter.slug])) {
                filterParams.push(filter.slug + '=' + $window.encodeURIComponent(vm.activeFilters[filter.slug]));
            }
        });

        if (filterParams.length) {
            vm.downloadUrl += '?' + filterParams.join('&');
        }
    }
})();
