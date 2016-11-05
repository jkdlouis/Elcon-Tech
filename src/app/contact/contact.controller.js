(function() {
    'use strict';

    angular
        .module('augularWorkplace')
        .controller('ContactController', ContactController);

    /** @ngInject */
    function ContactController($scope) {
        $scope.required = true;

    }


})();
