/// <reference path="assets/angular.js" />

var myApp = angular.module('DEMO', [])
    .controller('myController', function ($scope) {
        
    })
    .directive("welcomeText", function () {
        // let html = '<h1>Welcome to directive</h1>';
        return {
            templateUrl: "customDirective.html"
        }
    });