(function() {
  angular
    .module('myGame',['appRoutes', 'ngMaterial', 'LocalStorageModule', 'ngFileUpload'])
    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('green');
    });
})();
