(function() {
    angular
        .module('augularWorkplace')
        .controller('ProductController', ProductController);

    function ProductController (){
        var vm = this;
        vm.solidChip = false;
        vm.solidLead = false;
        vm.chipType = false;
        vm.miniature = false;
        vm.snapIn = false;
        vm.specialApp = false;
    }
})();
