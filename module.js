var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider)
{
    $routeProvider
    .when('/contact',{
        templateUrl:'contact.html'
    })
    .when('/about',{
        templateUrl:'about.html'
    })
    .when('/',{
        templateUrl:'home.html'
    })
});