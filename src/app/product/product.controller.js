(function() {
    angular
        .module('augularWorkplace')
        .controller('ProductController', ProductController);

    function ProductController ($scope){
        $scope.open = false;
    }
})();
