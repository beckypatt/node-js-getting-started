var app = angular.module("ApiApp", [ "ngRoute"]);

app.config(["$routeProvider", "$locationProvider", 
	function($routeProvider, $locationProvider){

	$routeProvider. 
		when("/home", {
			templateUrl: "views/auth-screen.html", 
			controller: "ApiConnectController"
		}).
		when("/dashboard", {
			templateUrl: "views/dashboard.html", 
			controller: "DashboardController"
		}).
		when("/new-course", {
			templateUrl: "views/new-course.html", 
			controller: "NewCourseController"
		}).
		otherwise({
				
				redirectTo: "/home"	

			}); 
		 // enable html5Mode for pushstate ('#'-less URLs)
	    //$locationProvider.html5Mode(true);
	   // $locationProvider.hashPrefix('!')

}]); 


app.controller("ApiConnectController", function($scope, $http, $rootScope){
	
	$rootScope.apiCreds = {

	}; 

	$scope.checkCreds = function(){

		console.log($rootScope.apiCreds); 


		$http.post("/checkCreds", $rootScope.apiCreds)
			.success(function(data){


				$rootScope.apiCreds.account = {
				 	id: data[0]["id"], 
				 	name: data[0]["name"] 

				}; 
				console.log($rootScope.apiCreds); 

			})
			.error(function(data){
				console.log('Error: ' + data);

			}); 

	}

});  


app.controller("DashboardController", function($scope, $http, $rootScope){


		$http.post("/getAcctAnalytics", $rootScope.apiCreds)
			.success(function(data){
				console.log(data);
			})
			.error(function(data){
				console.log('Error: ' + data);

			}); 

});  



app.controller("NewCourseController", function($scope, $http, $rootScope){
		
		$scope.multipleCourses = false; 

		$scope.getEnrollmentTerms = function(){

		};

		$scope.createNewCourse = function(){

		} ; 

})