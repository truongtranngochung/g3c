angular.module('g3cApp.huongDan')
     .controller('huongDanEntriesController', [ '$scope','$http', function huongDanEntriesController( $scope, $http ) {

     	$http.get('/huongdan/danhSachHuongDan.json')
     	.then(function(response){
     		$scope.Entries = response.data;
     		console.log($scope.Entries);
     	}, function(response){
     		console.log('error'+response);
     	});

		// $scope.Entries = [	
		// 	{ text: "this is the first tutorial", 
		// 		id: "100",
		// 	  comments: [
		// 		{text: "1. Comment"}, 
		// 		{text: "2. Comment"}
		// 	  ] 
		// 	},
		// 	{ text: "this is the second tutorial", 
		// 	 id: "200",
		// 	  comments: [
		// 		{text: "3. Comment"}, 
		// 		{text: "4. Comment"}
		// 	  ] 
		// 	}
		// ];
	}])

	.controller('huongDanController', [ '$scope', function huongDanController( $scope ) {
		$scope.Title = "This is my tutorial";
	}])
	.controller('huongDanDetailController', [ '$scope','$routeParams','$http', function huongDanDetailController( $scope, $routeParams, $http ) {

		$http.get('huongdan/chiTiet.json').then(function(response){

			$scope.chiTiet = response.data[$routeParams.vid];console.log(response.data);
		}, function(response){
     		console.log('error'+response);
     	});

		$scope.Title = "This is my detail " + $routeParams.vid;

	}]);
