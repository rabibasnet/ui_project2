"use strict";
angular.module("appName").controller("personCtrl",
["$scope", "personService","personFactory", function($scope, personService,personFactory){
  //alert "personcontrol"; 
    init();
    personService.testValues();
   function init(){
        personService.setFirstName("Barrack");
        personService.setLastName("obama");
        personService.setAddress("white house");
        personService.setPhone("911")
    }
   $scope.initialize=function(){
       init();
       console.log("from personal ctrl")
       personService.testValues();
   } 
    
}]);