'use strict';

var handshakeApp = angular.module('handshakeApp', []);

handshakeApp.controller('HandshakeListCtrl', function($scope, $http){
  $http.get('handshakes/handshakes.json').success(function(data) {
    $scope.handshakes = data;
  });
});