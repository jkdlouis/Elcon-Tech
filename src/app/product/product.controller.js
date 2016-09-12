(function() {
    angular
        .module('augularWorkplace')
        .controller('ProductController', ProductController);

    function ProductController ($scope){
        $scope.solidChip = false;
        $scope.solidLead = false;
        $scope.chipType = false;
        $scope.miniature = false;
        $scope.snapIn = false;
        $scope.specialApp = false;
    }
})();
