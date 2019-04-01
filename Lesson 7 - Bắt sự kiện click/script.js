/// <reference path ="assets/angular.js" />

var app = angular.module('handleEvent', []);

app.controller('handleEventController', ['$scope', function ($scope) {
    var technologies = [
        { Name: "C#", Likes: 0, Minus: 0, Dislikes: 0 },
        { Name: "Angular", Likes: 0, Minus: 0, Dislikes: 0 },
        { Name: "ReactJS", Likes: 0, Minus: 0, Dislikes: 0 },
        { Name: "Javascript", Likes: 0, Minus: 0, Dislikes: 0 }
    ];

    $scope.technologies = technologies;

    $scope.increaseLike = function (technology) {
        technology.Likes++;
        technology.Minus = technology.Likes - technology.Dislikes;
    }

    $scope.increaseDislike = function (technology) {
        technology.Dislikes++;
        technology.Minus = technology.Likes - technology.Dislikes;
    }
}]);