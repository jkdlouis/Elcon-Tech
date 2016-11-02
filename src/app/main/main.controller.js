(function() {
  'use strict';

  angular
    .module('augularWorkplace')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    // carousel
    var vm = this;
    vm.myInterval = 3000;
    vm.noWrapSlides = true;
    vm.activeSlide = 0;
    vm.slides = [
      {
        image: 'assets/images/shenzhen-city3.jpg',
        alt: 'Asia Technology City of Shenzhen',
        text: 'Welcome To Elcon Technology, Please Let Us Introduce Ourselves',
        link: '#/about',
        button: 'About Us'
      },
        {
      image: 'assets/images/shenzhen-city1.jpg',
          alt: 'Shenzhen Night City',
          text: 'Elcon Technology Only Offers High Quality Electrolytic Capacitors',
          link: '#/product',
          button: 'View Product'
    },
      {
        image: 'assets/images/professionals.jpg',
        alt: 'Elcon Tech Professional Sales Team',
        text: 'Our Professional Team Is Here To Help You',
        link: '#/contact',
        button: 'Contact Us'
      }
    ];

   vm.galleries = [
     {
       image: 'assets/images/factories/factory-1.jpg',
       alt: 'Elcon Technology Facility'
     },
     {
       image: 'assets/images/factories/factory-2.jpg',
       alt: 'Elcon Technology Facility'
     },
     // {
     //   image: 'assets/images/factories/factory-3.jpg',
     //   alt: 'Elcon Technology Facility'
     // },
     {
       image: 'assets/images/factories/factory-4.jpg',
       alt: 'Elcon Technology Facility'
     },
     // {
     //   image: 'assets/images/factories/factory-5.jpg',
     //   alt: 'Elcon Technology Facility'
     // },
     {
       image: 'assets/images/factories/factory-6.jpg',
       alt: 'Elcon Technology Facility'
     },
     // {
     //   image: 'assets/images/factories/factory-7.jpg',
     //   alt: 'Elcon Technology Facility'
     // },
     {
       image: 'assets/images/factories/factory-8.jpg',
       alt: 'Elcon Technology Facility'
     },
     {
       image: 'assets/images/factories/factory-9.jpg',
       alt: 'Elcon Technology Facility'
     },
     {
       image: 'assets/images/factories/factory-11.jpg',
       alt: 'Elcon Technology Facility'
     },
     {
       image: 'assets/images/factories/factory-12.jpg',
       alt: 'Elcon Technology Facility'
     },
     {
       image: 'assets/images/factories/factory-13.jpg',
       alt: 'Elcon Technology Facility'
     },
     {
       image: 'assets/images/factories/factory-14.jpg',
       alt: 'Elcon Technology Facility'
     },
     {
       image: 'assets/images/factories/factory-15.jpg',
       alt: 'Elcon Technology Facility'
     },
     {
       image: 'assets/images/factories/factory-16.jpg',
       alt: 'Elcon Technology Facility'
     }
   ];

  }


})();
