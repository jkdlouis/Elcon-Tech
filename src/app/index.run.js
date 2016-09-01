(function() {
  'use strict';

  angular
    .module('augularWorkplace')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
