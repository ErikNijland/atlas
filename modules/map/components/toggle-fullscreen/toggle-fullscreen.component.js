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
        console.log(vm.isFullscreen);
        vm.toggle = function () {
            store.dispatch({
                type: !vm.isFullscreen ?
                    ACTIONS.STACKED_PANELS_SHOW_FULLSCREEN_MAP :
                    ACTIONS.STACKED_PANELS_HIDE_FULLSCREEN_MAP
            });
        };
    }
})();