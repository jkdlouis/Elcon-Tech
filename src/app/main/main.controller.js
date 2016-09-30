(function() {
  'use strict';

  angular
    .module('augularWorkplace')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr) {
    // carousel
    var vm = $scope;
    vm.myInterval = 3000;
    vm.noWrapSlides = true;
    vm.activeSlide = 0;
    vm.slides = [
        {
      image: 'assets/images/shenzhen-city1.jpg',
          alt: '',
          text: 'Elcon Technology Only Offers High Quality Electric Capacitors',
          link: '#/product',
          button: 'View Product'
    },
      {
        image: 'assets/images/shenzhen-city3.jpg',
        alt: '',
        text: 'Join Us At Elcon, We offer exciting career opportunity for you',
        link: '#/career',
        button: 'Join Us'
      },
      {
        image: 'assets/images/professionals.jpg',
        alt: '',
        text: 'Our Professional Team Is Here To Help You',
        link: '#/contact',
        button: 'Contact Us'
      }
    ];

    // certificate section
    vm.certificate = {
      name: "Elcon Certificates",
      image: "assets/images/certificates.jpg"
    };

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
