(function() {
  'use strict';
  angular
  .module('appRoutes', ['ui.router','oc.lazyLoad','ngMessages','angularCSS','ngFileUpload'])
  .config(configuration)
  .controller('tabCtrl' , tabCtrl);

  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider,$urlRouterProvider){
    $stateProvider

    .state('landing',{
      url: '/landing',
      templateUrl: 'components/landing/landing.view.html',
      css: './css/style.landing.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/landing/landing.controller.js')
       }]
      },
      // controller: 'landingController',
      controllerAs: 'vm'
    })

    .state('register',{
      url: '/register',
      templateUrl: 'components/register/register.view.html',
      css: './css/style.register.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/register/register.controller.js')
       }]
      },
      controller: 'registerController',
      controllerAs: 'vm'
    })

    .state('propierty',{
      url: '/propierty',
      templateUrl: 'components/propiedades/propierty.view.html',
      css: './css/style.propierty.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/propiedades/propierty.controller.js')
       }]
      },
      controller: 'propiertyController',
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/landing');
  }

  function tabCtrl($scope, $location, $log) {
      $scope.selectedIndex = 0;

      $scope.$watch('selectedIndex', function(current, old) {
          switch (current) {
              case 0:
                  $location.url("/landing");
                  break;
              case 1:
                  $location.url("/register");
                  break;
              case 2:
                  $location.url("/propierty");
                  break;
          }
      });
  }
})();
