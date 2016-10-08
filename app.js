
angular.module("zonMonyApp", ["ngMaterial", 'ngMessages'])
    .controller('expenseCtrl', expenseCtrl)
    .config(function ($mdIconProvider) {
        $mdIconProvider.fontSet('md', 'material-icons');
    });
;

function expenseCtrl($scope, $q) {


    //Start coding from here !!!!

    var vm = this;

    vm.GrandTotal = 400706.58;
    vm.currentMonthTotal = 3925.18;

    vm.numberOfPayments = 18;
    vm.numberOfPaid = 11;

    // //Before promise !!
    // function add(x, y, callback, errCallback) {

    //     $timeout(function () {
    //         callback(x + y);
    //     }, 100)

    // }

    // var startTime = Date.now();

    // add(5, 2, function (result) {

    //     add(result, 3, function (result) {

    //         add(result, 1, function (result) {

    //             vm.result = result;
    //             vm.elapsedTime = Date.now() - startTime;
    //         }, function (err) {/*err code will be here */ })
    //     }, function (err) {/*err code will be here */ });
    // }, function (err) {/*err code will be here */ })


    // //With promise
    // function add(x, y) {  //no callback and errCallback
    //     //$timeout has already promise
    //     return $timeout(function () {
    //         return x + y;
    //     }, 100)

    // }

    // var startTime = Date.now();
    // var promise = add(5, 4);
    // promise.then(function (result) {
    //     vm.result = result;
    //     vm.elapsedTime = Date.now() - startTime;

    // })

    // //Simple promise
    // function add(x, y) {  //no callback and errCallback
    //     //$timeout has already promise
    //     return $timeout(function () {
    //         return x + y;
    //     }, 100)

    // }

    // var startTime = Date.now();
    // add(5, 4)
    //     .then(function (result) {
    //         vm.result = result;
    //         vm.elapsedTime = Date.now() - startTime;

    //     })



    // //Promise benefits???
    // function add(x, y) {  //no callback and errCallback
    //     //$timeout has already promise
    //     return $timeout(function () {
    //         return x + y;
    //     }, 100)

    // }

    // var startTime = Date.now();
    // add(5, 4)
    //     .then(function (result) {
    //         return add(result, 1);
    //     })
    //     .then(function(result){
    //         return add(result,1);
    //     })
    //     .then(function(result){
    //         return Array(result).join('*');
    //     })
    //     .then(function (result) {
    //         vm.result = result;
    //         vm.elapsedTime = Date.now() - startTime;

    //     })




    //With $q
    function add(x, y) {  //no callback and errCallback
        
        var q = $q.defer(); 

        setTimeout(function () {
            var result = x+y ; 
            if(result >=0 ){
                q.resolve(x+y);
            }
            else{
                q.reject('negative value: ' + result);
            }
            q.resolve(x+y); 
        }, 100)

        return q.promise; 
    }

    var startTime = Date.now();
    add(5, 4)
        .then(function (result) {
            return add(result, -100);
        })
        .then(function(result){
            return add(result,1);
        })
        .then(function(result){
            return add(result,5);
        })
        .then(function (result) {
            vm.result = result;
            //vm.elapsedTime = Date.now() - startTime;

        })
        .catch(function(failure){
            vm.failure = failure; 
        })
        .finally(function(){
            vm.elapsedTime = Date.now() - startTime;   //added a finally 
        }) 








    //vm.result = add(5,2); 




    console.log('well...');













}; //end of the expenseCtrl fn.




