(function(){
    var InspyrusInventoryApp=angular.module('InspyrusInventoryApp',['ngRoute']);
  
    InspyrusInventoryApp.config(function($routeProvider){
    
         $routeProvider
        .when('/Cloud', {
            controller:'customerController',
            templateUrl:'/app/views/customerDetails.html'
            
        });
       
    });
   

}());

 
