angular.module("sampleApp", ["ngMaterial"])
    .controller('indexCtrl', indexCtrl);


function indexCtrl($scope) {


    $scope.showLeftSidenav = false;
    $scope.toggleLeftSidenav = function () {
        $scope.showLeftSidenav = !$scope.showLeftSidenav;
    };


}

