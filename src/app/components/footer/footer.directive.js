(function() {

    angular
        .module('augularWorkplace')
        .directive('elconFooter', function() {
            return {
                restrict: 'E',
                templateUrl: 'app/components/footer/footer.html',
                replace: true
            }
        });
})();
