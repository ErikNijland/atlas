(function () {
    'use strict';

    angular
        .module('dpMap')
        .component('dpToggleFullscreen', {
            bindings: {
                isFullscreen: '='
            },
            templateUrl: 'modules/map/components/toggle-fullscreen/toggle-fullscreen.html',
            controller: DpToggleFullscreenController,
            controllerAs: 'vm'
        });

    DpToggleFullscreenController.$inject = ['store', 'ACTIONS'];

    function DpToggleFullscreenController (store, ACTIONS) {
        var vm = this;

        vm.toggle = function () {
            store.dispatch({
                type: ACTIONS.STACKED_PANELS_FULLSCREEN_MAP,
                payload: !vm.isFullscreen
            });
        };
    }
})();