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
		when("/crosslist", {
			templateUrl: "views/crosslist.html", 
			controller: "CrosslistController"
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

		$http.post("/getTerms", $rootScope.apiCreds)
			.success(function(data){
				console.log(data);
			})
			.error(function(data){
				console.log('Error: ' + data);

			}); 	

});  



app.controller("NewCourseController", function($scope, $http, $rootScope){
		
		$scope.multipleCourses = false; 
		$scope.newCourseObj = {
			apiCreds: $rootScope.apiCreds,
			courseObj:{ 
			course: {

			}
		  }
		}

		$scope.getEnrollmentTerms = function(){

		};

		$scope.createNewCourse = function(){

			validJSON = JSON.stringify($scope.newCourseObj); 

			$http.post("/newCourse", validJSON,{ 
				headers:{'Content-Type':'application/json'}
				})
				.success(function(data){
					console.log(data);
				})
				.error(function(data){
					console.log('Error: ' + data);

				}); 


		};  

});


app.controller("CrosslistController", function($scope, $http, $rootScope){
		
		$scope.newCourseObj = {
			apiCreds: $rootScope.apiCreds,
			courseObj:{ }
		}; 

		$scope.parentSectionGood = false;
		$scope.childSectionGood = false;  

		$scope.checkParentSection = function(){

			validJSON = JSON.stringify($scope.newCourseObj); 

			$http.post("/checkParentSection", validJSON,{ 
				headers:{'Content-Type':'application/json'}
				})
				.success(function(data){
					console.log(data);
					if (data.length !== 0){

						$scope.parentSectionGood = true; 	
						checkChildSection(); 
					} else {
						$scope.errorMessage = "Something is funky with this parent course. It is likely already the child course of something else: " + data;
					}
				})
				.error(function(data){
					console.log('Error: ' + data);
					$scope.errorMessage = 'Error: ' + data; 

				});		

		};

		function checkChildSection(){

			var validJSON = JSON.stringify($scope.newCourseObj); 

			$http.post("/checkChildSection", validJSON,{ 
				headers:{'Content-Type':'application/json'}
				})
				.success(function(data){
					console.log(data);
					if (data.length !== 0){
						$scope.newCourseObj.courseObj.childSectionID = data[0].id; 
						$scope.childSectionGood = true; 
						console.log(data); 
						console.log($scope.newCourseObj.courseObj.childSectionID); 
						console.log("Would crosslist these two sections"); 
						crosslistCourses(); 

					} else {
						$scope.errorMessage = "Something is funky with this child course. It is likely already crosslisted somewhere else: " + data;
					}
				})
				.error(function(data){
					console.log('Error: ' + data);
					$scope.errorMessage = "Error: " + data;

				});
		}

		function crosslistCourses(){

			var validJSON = JSON.stringify($scope.newCourseObj); 

			$http.post("/crosslist", validJSON, { 
				headers:{'Content-Type':'application/json'}
				})
				.success(function(data){
					console.log(data); 
					$scope.successMessage = "Successfully crosslisted section " + data.name + "."; 
				})
				.error(function(data){
					console.log('Error: ' + data);
					$scope.errorMessage = "Error: " + data;

				});

		}


});




