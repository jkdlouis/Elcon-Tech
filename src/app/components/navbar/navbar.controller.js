(function() {
    angular
        .module('augularWorkplace')
        .controller('NavController', NavController);

    function NavController ($scope, $location){
        var vm = this;
        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
        $scope.isCollapsed = true;
    }
})();
