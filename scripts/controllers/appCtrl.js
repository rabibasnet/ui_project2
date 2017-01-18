angular.module("appName").controller("personCtrl",
["$scope", "personService","personFactory", function($scope, personService,personFactory){    
$scope.title="Hello World";
    $scope.formModal="George";
    $scope.change=function(){
    $scope.title="God dammit, check your spellings";
       // alert ($scope.formModal);
    }
    
    $scope.init=function(){
        personService.setFirstName("Donald");
        personService.setLastName("trump");
        personService.setAddress("White House");
        personService.setLastName("911");
        
    }
    $scope.displayPerson=function(){
		init();
        console.log("from app ctrl");
        personService.testValues();
    }
	personFactory.setFirstName("hello world");
	personFactory.setLastName("hello world");
	personFactory.testValues();
}]);