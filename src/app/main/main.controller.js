(function() {
  'use strict';

  angular
    .module('augularWorkplace')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr) {
    // carousel
    $scope.myInterval = 3000;
    $scope.noWrapSlides = true;
    $scope.activeSlide = 0;
    $scope.slides = [
        {
      image: 'assets/images/shenzhen-city1.jpg'
    },
      {
        image: 'assets/images/shenzhen-city3.jpg'
      },
      {
        image: 'assets/images/professionals.jpg'
      }
    ];

    // certificate section
    $scope.certificate = {
      name: "Elcon Certificates",
      image: "assets/images/certificates.jpg"
    };

    var vm = this;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1472602141674;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

  }


})();
