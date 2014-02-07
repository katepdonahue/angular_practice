'use strict';

var handshakeApp = angular.module('handshakeApp', []);

handshakeApp.controller('HandshakeListCtrl', function($scope){
  $scope.handshakes = [
    { "id": 1,
      "name": "catgrab",
      "attributes": "Firm and confident on one hand, sleepy on the other.",
      "context": "Cat has it's paw out."},
    { "id": 1,
      "name": "community",
      "attributes": "Ambidextrous coordination.",
      "context": "When you see something cool that you like."},
    { "id": 1,
      "name": "fingerguns",
      "attributes": "Handtickle, fingerguns.",
      "context": "Agreement, conspiracy."},
    { "id": 1,
      "name": "gentlemancat",
      "attributes": "Friendly, cordial.",
      "context": "In the presence of a distinguished cat."},
    { "id": 1,
      "name": "heyarnold",
      "attributes": "Thumb-high-five.",
      "context": "When you see your best friend."},
    { "id": 1,
      "name": "jazzhandshake",
      "attributes": "Lean back.",
      "context": "Things are going your way."},
    { "id": 1,
    "name": "owl",
    "attributes": "talons.",
    "context": "When you meet an owl for the first time."},
    { "id": 1,
    "name": "stillwalking",
    "attributes": "Complicated finger weaving, never stop walking.",
    "context": "You just won."}
  ];
});