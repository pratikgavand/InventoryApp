(function(){
    
   angular.module('InspyrusInventoryApp').controller('customerController',function($scope){
        $scope.TopMenu=[{name:'DEV', url:'/Dev'},
                        {name:'TEST', url:'/Test'},
                        {name:'PROD', url:'/Prod'}];
   }); 
    
       
}());
