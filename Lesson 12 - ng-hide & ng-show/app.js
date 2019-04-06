/// <reference path="assets/angular.js" />

(function () {
    var app = angular.module('app', []);

    app.controller('showHideCtrl', showHideCtrl);

    showHideCtrl.$inject = ['$scope'];

    function showHideCtrl($scope) {
        var employees = [
            { name: 'Nguyen A', birthDate: '12/3/1996', salary: 1200000, gender: 'Male', status: true },
            { name: 'Nguyen B', birthDate: '1/5/1996', salary: 1700000, gender: 'Male', status: false },
            { name: 'Nguyen C', birthDate: '6/30/1996', salary: 1000000, gender: 'Male', status: true },
            { name: 'Nguyen D', birthDate: '4/31/1996', salary: 1500000, gender: 'Male', status: true },
            { name: 'Nguyen E', birthDate: '5/20/1996', salary: 1300000, gender: 'Male', status: false }
        ];

        $scope.employees = employees;
        $scope.sortColumn = 'name';
        $scope.reverse = false;
        $scope.searchText = '';
        $scope.hideSalary = false;

        $scope.sortData = function (column) {
            if ($scope.sortColumn == column) {
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.reverse = false;
            }

            $scope.sortColumn = column;
        };

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverse ?  'arrow-up' : 'arrow-down';
            }
            return '';
        }
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


