(function () {
'use strict';

  var SimpleModalCtrl = function ($modalInstance, $scope) {

    $scope.ok = function () {
      $modalInstance.close();
    };
  };

  angular.module('repicbro.controllers')
    .controller('SimpleModalCtrl', SimpleModalCtrl);
})();
