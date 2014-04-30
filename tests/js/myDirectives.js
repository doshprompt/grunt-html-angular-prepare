angular.module('my.directives')
    .directive('customTag', [function () {
        'use strict';

        return {
            restrict: 'E',
            scope: true,
            template: '<h1>HELLO WORLD!</h1>'
        };
    }])
    .directive('myTag', [function () {
        return function (scope, element, attrs) {
            'use strict';

            angular.noop(scope);
            angular.noop(element);
            angular.noop(attrs);
        };
    }])
    .directive('yetAnotherTag', [function ($rootScope, $filter) {
        'use strict';

        var ctrl = function () {
            angular.noop($rootScope);
            angular.noop($filter);
        }, _linkFn = function (scope, element, attrs) {
            angular.noop(scope);
            angular.noop(element);
            angular.noop(attrs);
        };

        return {
            link: _linkFn,
            controller: ctrl            
        };
    }]);