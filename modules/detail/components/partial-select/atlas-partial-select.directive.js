(function () {
  'use strict';

  angular
    .module('atlasDetail')
    .directive('atlasPartialSelect', atlasPartialSelectDirective);

  atlasPartialSelectDirective.$inject = ['api', 'pluginDetailService'];

  function atlasPartialSelectDirective (api, pluginDetailService) {
    return {
      restrict: 'E',
      scope: {
        apiData: '=',
        partial: '@'
      },
      link: linkFunction
    };

    function linkFunction(scope, element) {
      var partialPath,
      partialRoot;

      partialRoot = 'modules/detail/components/partial-select/partials/';

      partialPath = partialRoot + scope.partial + '.html';

      pluginDetailService.compileTemplate(scope, element, partialPath);

      scope.loadMore = function () {
        if (!scope.apiData.next) {
          return;
        }

        api.getByUrl(scope.apiData.next).then(function (response) {
          scope.apiData.next = response._links.next.href;
          scope.apiData.results.push.apply(scope.apiData.results, response.results);
          // push results to end of scope.apiData.results
        });
      };
    }
  }
})();