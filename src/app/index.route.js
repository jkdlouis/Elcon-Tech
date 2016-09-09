(function() {
  'use strict';

  angular
    .module('augularWorkplace')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

        .state('product', {
            url: '/product',
            templateUrl: 'app/product/product.html',
            controller: 'ProductController',
            controllerAs: 'product'
        })

    $urlRouterProvider.otherwise('/');
  }

})();
