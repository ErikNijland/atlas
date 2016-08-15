(function () {
    'use strict';

    angular
        .module('atlas')
        .factory('mapReducers', mapReducersFactory);

    mapReducersFactory.$inject = ['ACTIONS'];

    function mapReducersFactory (ACTIONS) {
        var reducers = {};

        reducers[ACTIONS.MAP_SET_BASELAYER] = mapSetBaselayerReducer;
        reducers[ACTIONS.MAP_ADD_OVERLAY] = mapAddOverlayReducer;
        reducers[ACTIONS.MAP_REMOVE_OVERLAY] = mapRemoveOverlayReducer;
        reducers[ACTIONS.MAP_TOGGLE_VISIBILITY_OVERLAY] = mapToggleVisibilityOverlay;
        reducers[ACTIONS.MAP_PAN] = mapPanReducer;
        reducers[ACTIONS.MAP_ZOOM] = mapZoomReducer;

        return reducers;

        /**
         * @param {Object} oldState
         * @param {String} payload - The name of the baseLayer, it should match a key from base-layers.constant.js
         *
         * @returns {Object} newState
         */
        function mapSetBaselayerReducer (oldState, payload) {
            var newState = angular.copy(oldState);

            newState.map.baseLayer = payload;

            return newState;
        }

        /**
         * @param {Object} oldState
         * @param {String} payload - The name of the overlay, it should match a key from overlays.constant.js
         *
         * @returns {Object} newState
         */
        function mapAddOverlayReducer (oldState, payload) {
            var newState = angular.copy(oldState);

            newState.map.overlays.push({id: payload, visibility: true});

            return newState;
        }

        /**
         * @param {Object} oldState
         * @param {String} payload - The name of the overlay, it should match a key from overlays.constant.js
         *
         * @returns {Object} newState
         */
        function mapRemoveOverlayReducer (oldState, payload) {
            var i, newState = angular.copy(oldState);
            // finding the id of the payload
            for (i = 0;i < newState.map.overlays.length; i++) {
                if (newState.map.overlays[i].id === payload) {
                    break;
                }
            }
            if (i <= newState.map.overlays.length) {
                newState.map.overlays.splice(i, 1);
            }
            return newState;
        }

        /**
         * @param {Object} oldState
         * @param {String} payload - The name of the overlay, it should match a key from overlays.constant.js
         *
         * @returns {Object} newState
         */
        function mapToggleVisibilityOverlay (oldState, payload) {
            var newState = angular.copy(oldState);
            newState.map.overlays[payload] = !newState.map.overlays[payload];

            return newState;
        }
        /**
         * @param {Object} oldState
         * @param {Array} payload - The new position in Array format, e.g. [52.123, 4.789]
         *
         * @returns {Object} newState
         */
        function mapPanReducer (oldState, payload) {
            var newState = angular.copy(oldState);

            newState.map.viewCenter = payload;

            return newState;
        }

        /**
         * @param {Object} oldState
         * @param {Number} payload - The zoom level
         *
         * @returns {Object} newState
         */
        function mapZoomReducer (oldState, payload) {
            var newState = angular.copy(oldState);

            newState.map.zoom = payload;

            return newState;
        }
    }
})();

