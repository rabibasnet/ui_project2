angular.module("appName").controller("contactListCtrl", ["$scope", "personFactory", function($scope, personFactory){
	
	$scope.contactList=[];
//	var promise=personHttp.getPersonList();
//	promise,then(function(response){
//		$scope.contactList=response;
//	});
	
	$scope.formModels={
		firstName:"",
		lastName:"",
		address:"",//json obj has comma, not colons
		phone:"" //phone to phoneNumber for the database
	};
	
	 var promise=personHttp.getPersonList();
            promise.then(function(response){
                $scope.contactList=response;
                console.log(response);
            });
	$scope.update=function(){
		
		var tempObj={
		firstName:$scope.formModels.firstName,
		lastName:$scope.formModels.lastName,
		address:$scope.formModels.address,//json obj has comma, not colons
		phone:$scope.formModels.phone
		};
		$scope.contactList.push(tempObj);
	};
	
	var person1={
		firstName:"hani",
		lastName:"nani",
		address:"irving",//json obj has comma, not colons
		phone:"123"
	};
	
		var person2={
		firstName:"rabi",
		lastName:"basnet",
		address:"ruston",//json obj has comma, not colons
		phone:"123456789"
	};
	
		var person3={
		firstName:"nabjit",
		lastName:"mahat",
		address:"dallas",//json obj has comma, not colons
		phone:"987654321"
	};
	
	$scope.contactList.push(person1);
	$scope.contactList.push(person2);
	$scope.contactList.push(person3);

}]);