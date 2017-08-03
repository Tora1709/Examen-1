(function() {
  'use strict';
  angular
  .module('appRoutes', ['ui.router','oc.lazyLoad','ngMessages','angularCSS','ngFileUpload'])
  .config(configuration);

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

    $urlRouterProvider.otherwise('/landing');
  }

})();
