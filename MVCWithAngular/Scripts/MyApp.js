(function () {
    //Create a Module 
    // A module is a collection of services, directives, controllers, filters, and configuration information. angular.module is used to configure the $injector. 
    //An AngularJS module defines an application.
    //The module is a container for the different parts of an application.
    //The module is a container for the application controllers.
    //Controllers always belong to a module.
    //The "myApp" parameter refers to an HTML element in which the application will run. eg: <div ng-app="myApp"...>
    //The [] parameter in the module definition can be used to define dependent modules.
    //Without the [] parameter, you are not creating a new module, but retrieving an existing one.
    //Here the dependent module of the module we named MyApp is ngRoute
    var app = angular.module('MyApp', ['ngRoute']);  // Will use ['ng-Route'] when we will implement routing
    //Create a Controller
    //HomeController = controller name
    //
    app.controller('HomeController', function ($scope) {  // here $scope is used for share data between view and controller
        //In AngularJS, $scope is the application object (the owner of application variables and functions).
        //When you make a controller in AngularJS, you pass the $scope object as an argument:
        //The scope is the binding part between the HTML (view) and the JavaScript (controller).
        //The scope is available for both the view and the controller.
        $scope.Message = "Yahoooo! we have successfully done our first part.";
    });
})();