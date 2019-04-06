/// <reference path="assets/angular.js" />

(function () {
    var app = angular.module('app', []);

    app.controller('httpServiceCtrl', httpServiceCtrl);

    httpServiceCtrl.$inject = ['$scope', '$http'];

    function httpServiceCtrl($scope, $http) {
        $http.get('http://localhost:3000/employees').then(res => $scope.employees = res.data);
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


