var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('HomeCtrl', function($scope, $routeParams) {



});

myApp.config(function ($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl: 'home.html',
		controller: 'HomeCtrl'
	})
	.when('/show/:theName/:no1',{
		templateUrl: 'show.html',
		controller: 'showNCt'
	})
	.otherwise({redirectTo: '/home'});
});







$(document).ready(function() {
	
	
	$('button').eq(0).click(function() {
		
		
	});

	$( "h2:eq(2)" ).append( 'JQ- OK' );
	
	
})
				
