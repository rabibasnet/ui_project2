"use strict";

angular.module("appName").directive("contactListForm",[function(){
	return{
		restrict:"EAMC",
		templateUrl:"/views/contactListForm.html",//replacing template with templateUrl
		controller:"contactListCtrl",
		link:function($scope){
		$scope.searchMd="";
	}
		
	}
	
	
}]);