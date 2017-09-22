angular.module('Website', [])

.directive('mainDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/home.html'
  };
})

.controller('MainController', function($scope, $window) {
  
    changeTemplate();

    $window.onresize = function () {
        changeTemplate();
        $scope.$apply();
    };

    function changeTemplate() {
        var screenWidth = $window.innerWidth;
        if (screenWidth <= 950 && screenWidth >=750) {
            $scope.imageSource = 'assets/home_screen.png';
        } else if (screenWidth > 950 || screenWidth < 750){
            $scope.imageSource = 'assets/CCC.gif';
        };
    };
    
});
