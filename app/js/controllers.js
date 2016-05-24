'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
  function PhoneListCtrl($scope) {
    $scope.phone = [
      {"name":"Nexus S",
        "snippet":"Fast just got faster with Nexus S." },
      {"name":"IPHONE",
        "snippet":"THE BEST PHONE"},
      {"name":"sAMSUNG",
        "snippet":"The Next, Next Generation tablet.."}
      ];
  }
