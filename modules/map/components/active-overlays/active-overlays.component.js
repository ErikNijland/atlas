(function () {
    'use strict';

    angular
        .module('dpMap')
        .component('dpActiveOverlays', {
            bindings: {
                overlays: '=',
                zoom: '=',
                showActiveOverlays: '='
            },
            templateUrl: 'modules/map/components/active-overlays/active-overlays.html',
            controller: DpActiveOverlaysController,
            controllerAs: 'vm'
        });

    DpActiveOverlaysController.$inject = ['$scope', 'OVERLAYS', 'store', 'ACTIONS'];

    function DpActiveOverlaysController ($scope, OVERLAYS, store, ACTIONS) {
        var vm = this;

        vm.toggle = function () {
            store.dispatch({
                type: ACTIONS[!vm.showActiveOverlays ? 'MAP_SHOW_ACTIVE_OVERLAYS' : 'MAP_HIDE_ACTIVE_OVERLAYS']
            });
        };

        $scope.$watchCollection('vm.overlays', function () {
            vm.hideEverything = vm.overlays.length === 0;
        });
    }
})();