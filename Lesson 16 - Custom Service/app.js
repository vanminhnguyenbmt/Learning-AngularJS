/// <reference path="assets/angular.js" />

(function () {
    app.controller('processingStringCtrl', processingStringCtrl);

    processingStringCtrl.$inject = ['$scope', 'stringService'];

    function processingStringCtrl($scope, stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.transformString(input);
        }
        $scope.toLower = function (input) {
            $scope.output = stringService.toLower(input);
        }
    };
})();


