/// <reference path="assets/angular.js" />

(function () {
    var app = angular.module('app', []);

    app.controller('httpServiceCtrl', httpServiceCtrl);

    httpServiceCtrl.$inject = ['$scope', '$http', '$log'];

    function httpServiceCtrl($scope, $http, $log) {
        $http.get('http://localhost:3000/employees').then(
            res => $scope.employees = res.data,
            err => $log.error(err) 
        );
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


