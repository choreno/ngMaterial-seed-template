angular.module("sampleApp", ["ngMaterial", 'ngMessages'])
    .controller('indexCtrl', indexCtrl);


function indexCtrl($scope, $timeout, $mdDialog) {

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
                if ($scope.uSStateList[state] === chip || state === chip) {
                    return state; // return state code when you find a match.
                }
            }
            return null; // return null - so the chip won't be added.
        }
    };



    var imagePath = 'img/list/60.jpeg';

    $scope.phones = [
        {
            type: 'Home',
            number: '(555) 251-1234',
            options: {
                icon: 'communication:phone'
            }
        },
        {
            type: 'Cell',
            number: '(555) 786-9841',
            options: {
                icon: 'communication:phone',
                avatarIcon: true
            }
        },
        {
            type: 'Office',
            number: '(555) 314-1592',
            options: {
                face: imagePath
            }
        },
        {
            type: 'Offset',
            number: '(555) 192-2010',
            options: {
                offset: true,
                actionIcon: 'communication:phone'
            }
        }
    ];

    $scope.todos = [
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
    ];



    $scope.showAlert = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };

    $scope.showConfirm = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete your debt?')
            .textContent('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Please do it!')
            .cancel('Sounds like a scam');

        $mdDialog.show(confirm).then(function () {
            $scope.status = 'You decided to get rid of your debt.';
        }, function () {
            $scope.status = 'You decided to keep your debt.';
        });
    };




}

