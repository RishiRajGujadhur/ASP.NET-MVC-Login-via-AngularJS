//here I am separating each angular controller to separate file for make it manageable  
angular.module('MyApp') //extending from previously created angular module in the previous part
.controller('Part2Controller', function ($scope, ContactService) { //inject ContactService
    $scope.Contact = null;
    //Then you can expect the .then and .catch to be called back if all goes well (or not).
    //.then = ajax .success
    ContactService.GetLastContact().then(function (d) {
        $scope.Contact = d.data; // Success
    }, function () {
        alert('Failed'); // Failed
    });
})
    //Factory function used to create XMLHttpRequest objects.
    //The $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.
.factory('ContactService', function ($http) { // here I have created a factory which is a populer way to create and configure services
    var fac = {};
    fac.GetLastContact = function () {
        //The $http service is a function which takes a single argument — a configuration object — that is used to generate an HTTP request and returns a promise.
        //$http.get: Shortcut method to perform GET request.
        return $http.get('/Data/GetLastContact');
    }
    return fac;
});
