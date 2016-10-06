angular.module("sampleApp", ["ngMaterial", 'ngMessages'])
    .controller('indexCtrl', indexCtrl);


function indexCtrl($scope, $timeout) {

    var vm = this;

    $scope.showLeftSidenav = false;
    $scope.toggleLeftSidenav = function () {
        $scope.showLeftSidenav = !$scope.showLeftSidenav;
    };

    $scope.fullName = "fjdklsjfldksjf";


    // $scope.superHeroes = [
    //     "Iron Man",
    //     "Mowgli",
    //     "Spiderman",
    //     "Superman",
    //     "Chhota Bheem"
    // ];



    // $scope.loadSuperHeroes = function () {
    //     $timeout(function () {
    //         $scope.superHeroes = [
    //             { id: 1, name: "Iron Man" },
    //             { id: 2, name: "Mowgli" },
    //             { id: 3, name: "Spiderman" },
    //             { id: 4, name: "Superman" },
    //             { id: 5, name: "Chhota Bheem" }
    //         ];
    //     }, 1000);
    // };


    $scope.superHeroes = [
        { id: 1, name: "Iron Man", category: "Marvel" },
        { id: 2, name: "Mowgli", category: "Disney" },
        { id: 3, name: "Spiderman", category: "Marvel" },
        { id: 4, name: "Superman", category: "DC Comics" },
        { id: 5, name: "Chhota Bheem", category: "Indian" }
    ];

    $scope.superHeroSelectionComplete = function () {
        console.log("Selected Hero - " + $scope.selectedSuperHero.name);
    };




    // Variable on scope in the controller.
    $scope.tagsOnMowgli = ["Jungle Book", "Disney"];


    $scope.transformChip = function (chip) {
        if (chip) {
            for (var state in $scope.uSStateList) {
                if ($scope.uSStateList[state] === chip|| state === chip) {
                    return state; // return state code when you find a match.
                }
            }
            return null; // return null - so the chip won't be added.
        }
    };





}

