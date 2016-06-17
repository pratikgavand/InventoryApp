(function(){
angular.module('InspyrusInventoryApp').controller('homeController',function($scope){
console.log('pratik11111');
         $scope.LeftMenu=[{CustomerId:1, CustomerName:'Cloud', CustomerUrl:'/Cloud'},
                            {CustomerId:2, CustomerName:'Meritor', CustomerUrl:'/Meritor'},
                            {CustomerId:3, CustomerName:'Martin Brower', CustomerUrl:'/MartinBrower'},
                            {CustomerId:4, CustomerName:'HMS', CustomerUrl:'/HMS'}];
    
    });
}());
