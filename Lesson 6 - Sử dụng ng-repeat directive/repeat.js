/// <reference path="assets/angular.js" />

(function () {
    'use strict';
    var app = angular.module('app', []);

    app.controller('repeatController', repeatController);

    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
        let employees = [
            { firstName: "A", lastName: "AA", gender: 'Male', salary: 1000 },
            { firstName: "B", lastName: "BB", gender: 'Male', salary: 2000 },
            { firstName: "C", lastName: "CC", gender: 'Male', salary: 3000 },
            { firstName: "D", lastName: "DD", gender: 'Male', salary: 4000 }
        ];

        $scope.employees = employees;
    }
})();