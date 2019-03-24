/// <reference path="assets/angular.min.js" />

// Create a module
var myApp = angular.module('myModule', []);

// myApp.controller('myController', myController);

// function myController($scope) {
//     $scope.message = 'Angular JS Application';
// }

// Create controller with anonymous function
myApp.controller('myController', function ($scope) {
    $scope.message = 'Angular JS Application';
});

