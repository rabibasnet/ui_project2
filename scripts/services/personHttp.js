angular.module("appName").service("personHttp",["$http", function($http){
	
this.personList	= [];
	var that =this; 
	this.getPersonList=function(){
		return $http({
			method:"GET",
			url:"/service/contactinfo"
		}).then(function(result){
			that.personList=result.data;
			return result.data;
		});
	}
	   
}]);


	
//	/////remaining codes and connect to contactlist,html
//	contactlistctrl.js another name
//	promise ???? its not going to execute everything until the function jis called 
//phone to phoneNumber for database