(function() {
    'use strict';

    angular
        .module('augularWorkplace')
        .controller('AboutController', AboutController);

    /** @ngInject */
    function AboutController() {
        var vm = this;

        // certificate section
        vm.certificate = {
            name: "Elcon Certificates",
            image: "assets/images/certificates.jpg"
        };


    }


})();
