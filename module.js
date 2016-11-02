'use strict';

/* Blog Module */

angular.module('g3cApp.huongDan', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	  $routeProvider.when('/huongDan', {
		controller: 'huongDanController',
		templateUrl: 'partial/huongDan.html'
	  }).
	  when('/huongDan/:vid', {
		controller: 'huongDanDetailController',
		template: "<p>{{chiTiet.name}}</p><p>{{chiTiet.image}}</p><p>{{chiTiet.content}}</p>"
	  })
	}]);