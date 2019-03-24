/// <reference path="assets/angular.js" />

(function () {
    let app = angular.module('app', []);

    app.controller('nestedRepeatController', ['$scope', function ($scope) {
        let countries = [
            {
                name: 'UK',
                cities: [
                    { name: 'UKA' },
                    { name: 'UKB' },
                    { name: 'UKC' }
                ]
            },
            {
                name: 'USA',
                cities: [
                    { name: 'USAA' },
                    { name: 'USAB' },
                    { name: 'USAC' }
                ]
            },
            {
                name: 'India',
                cities: [
                    { name: 'IndiaA' },
                    { name: 'IndiaB' },
                    { name: 'IndiaC' }
                ]
            }
        ];

        $scope.countries = countries;
    }]);
})();