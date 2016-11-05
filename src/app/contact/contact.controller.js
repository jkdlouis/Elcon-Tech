(function() {
    'use strict';

    angular
        .module('augularWorkplace')
        .controller('ContactController', ContactController);

    /** @ngInject */
    function ContactController($scope) {
        $scope.required = true;

        $scope.formSubmit = function() {
            if($scope.contactForm.$valid) {
                alert('Form has been submitted!');
            }
        };
    }


})();
