/// <reference path="assets/angular.js" />

(function () {
    var app = angular.module('app', []);

    app.controller('filterDemoController', filterDemoController);

    filterDemoController.$inject = ['$scope'];

    function filterDemoController($scope) {
        var employees = [
            { name: 'Nguyen A', birthDate: '12/3/1996', salary: 1200000, gender: 'Male', status: true },
            { name: 'Nguyen B', birthDate: '1/5/1996', salary: 1200000, gender: 'Male', status: false },
            { name: 'Nguyen C', birthDate: '6/30/1996', salary: 1200000, gender: 'Male', status: true },
            { name: 'Nguyen D', birthDate: '4/31/1996', salary: 1200000, gender: 'Male', status: true },
            { name: 'Nguyen E', birthDate: '5/20/1996', salary: 1200000, gender: 'Male', status: false }
        ];

        $scope.employees = employees;
        $scope.limitRow = 3;
        $scope.limitFrom = 0;
    };

    app.filter('status', function () {
        return function (input) {
            if (input) {
                return 'Kích hoạt';
            }
            return 'Khóa';
        }
    });

})();


