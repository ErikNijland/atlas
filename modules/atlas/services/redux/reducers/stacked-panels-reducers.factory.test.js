describe('The stackedPanelsReducers factory', function () {
    var stackedPanelsReducers,
        DEFAULT_STATE,
        ACTIONS;

    beforeEach(function () {
        angular.mock.module('atlas');

        angular.mock.inject(function (_stackedPanelsReducers_, _DEFAULT_STATE_, _ACTIONS_) {
            stackedPanelsReducers = _stackedPanelsReducers_;
            DEFAULT_STATE = _DEFAULT_STATE_;
            ACTIONS = _ACTIONS_;
        });
    });

    describe('STACKED_PANELS_SHOW_LAYER_SELECTION', function () {
        it('sets the variable to true', function () {
            var output = stackedPanelsReducers[ACTIONS.STACKED_PANELS_SHOW_LAYER_SELECTION](DEFAULT_STATE);

            expect(output.map.showLayerSelection).toBe(true);
        });

        it('disables the fullscreen mode', function () {
            var output,
                inputState = angular.copy(DEFAULT_STATE);

            inputState.map.isFullscreen = true;
            output = stackedPanelsReducers[ACTIONS.STACKED_PANELS_SHOW_LAYER_SELECTION](DEFAULT_STATE);

            expect(output.map.isFullscreen).toBe(false);
        });
    });

    describe('STACKED_PANELS_HIDE_LAYER_SELECTION', function () {
        it('sets the variable to true', function () {
            var inputState,
                output;

            inputState = angular.copy(DEFAULT_STATE);
            inputState.showLayerSelection = true;

            output = stackedPanelsReducers[ACTIONS.STACKED_PANELS_HIDE_LAYER_SELECTION](inputState);

            expect(output.map.showLayerSelection).toBe(false);
        });
    });
});