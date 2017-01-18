angular.module('yantra', []).controller('wrappCtrl', 
function wrappCtrl($scope){
									  
	$scope.numOne=0;								  
									  
	$scope.numTwo=0;
	$scope.muOper="+";	
									  
		$scope.doCalculation=function(myOper){
	
	switch(myOper){
			case("+"): return parseFloat($scope.numOne.toFixed(2))+ parseFloat($scope.numTwo.toFixed(2));
			break;
			
			case("-"): return parseFloat($scope.numOne.toFixed(2))- parseFloat($scope.numTwo.toFixed(2));
			break;
			
			case("/"): return parseFloat($scope.numOne.toFixed(2))/ parseFloat($scope.numTwo.toFixed(2));
			break;
			
			case("*"): return parseFloat($scope.numOne.toFixed(2))* parseFloat($scope.numTwo.toFixed(2));
			break;
	}
}							  
									  
									  
									  
									  
									  }									 
									 
									 
									 
									 );