(function () {
    'use strict';

    angular
        .module('atlasDetail')
        .directive('atlasStelselpediaHeader', atlasStelselpediaHeaderDirective);

    function atlasStelselpediaHeaderDirective () {
        return {
            restrict: 'E',
            scope: {
                heading: '@',
                definition: '@',
                usePlural: '=',
                metaData: '=',
                brk: '='
            },
            templateUrl: 'modules/detail/components/stelselpedia/header/stelselpedia-header.html',
            transclude: true,
            controller: AtlasStelselpediaHeaderController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    AtlasStelselpediaHeaderController.$inject = ['$scope', '$sce', 'STELSELPEDIA'];

    function AtlasStelselpediaHeaderController ($scope, $sce, STELSELPEDIA) {
        var vm = this,
            isVisible = {};

        $scope.$watch('vm.heading', function (heading) {
            vm.htmlHeading = $sce.trustAsHtml(heading);
        });

        vm.stelselpedia = STELSELPEDIA.DEFINITIONS[vm.definition];
        vm.stelselpedia.label = vm.usePlural ? vm.stelselpedia.label_plural : vm.stelselpedia.label_singular;

        vm.hasMetaData = angular.isDefined(vm.metaData);

        vm.stelselpediaTitle = 'Uitleg tonen';
        vm.metaDataTitle = 'Informatie (metadata) tonen';

        vm.toggle = function (item) {
            isVisible[item] = !isVisible[item];

            if(item === 'help'){
                if(isVisible[item]) {
                    vm.stelselpediaTitle = 'Uitleg verbergen';
                } else {
                    vm.stelselpediaTitle = 'Uitleg tonen';
                }
            }
            if(item === 'meta'){
                if(isVisible[item]) {
                    vm.metaDataTitle = 'Informatie (metadata) verbergen';
                } else {
                    vm.metaDataTitle = 'Informatie (metadata) tonen';
                }
            }
        };

        vm.isVisible = function (item) {
            return isVisible[item];
        };
    }
})();
