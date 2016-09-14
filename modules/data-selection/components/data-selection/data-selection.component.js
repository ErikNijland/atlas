(function () {
    'use strict';

    angular
        .module('dpDataSelection')
        .component('dpDataSelection', {
            templateUrl: 'modules/data-selection/components/data-selection/data-selection.html',
            bindings: {
                state: '='
            },
            controller: DpDataSelectionController,
            controllerAs: 'vm'
        });

    DpDataSelectionController.$inject = ['$scope', 'dataSelectionApi', 'dataSelectionConfig'];

    function DpDataSelectionController ($scope, dataSelectionApi, dataSelectionConfig) {
        var vm = this;

        $scope.$watch('vm.state', fetchData, true);

        function fetchData () {
            vm.pageTitle = dataSelectionConfig[vm.state.dataset].LABEL;
            vm.isLoading = true;

            vm.currentPage = vm.state.page;

            dataSelectionApi.query(vm.state.dataset, vm.state.filters, vm.currentPage).then(function (data) {
                vm.availableFilters = data.filters;
                vm.tableData = data.tableData;

                vm.numberOfPages = data.number_of_pages;
                vm.numberOfResults = data.number_of_results;

                vm.isLoading = false;
            });
        }
    }
})();