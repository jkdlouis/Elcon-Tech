(function() {
    angular
        .module('augularWorkplace')
        .controller('NavController', NavController);

    function NavController ($scope, $location){
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }
})();
