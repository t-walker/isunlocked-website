'use strict';

/**
 * @ngdoc overview
 * @name isunlockedApp
 * @description
 * # isunlockedApp
 *
 * Main module of the application.
 */
angular.module('isunlockedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });

    $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'MissionCtrl',
      controllerAs: 'mission'
    });

    $stateProvider.state('organization', {
      url: '/organization',
      templateUrl: 'views/organization.html',
      controller: 'OrganizationCtrl',
      controllerAs: 'organization'
    });

    $stateProvider.state('contributors', {
      url: '/contributors',
      templateUrl: 'views/contributors.html',
    });

    $stateProvider.state('panel', {
      url: '/panel',
      templateUrl: 'views/panel.html',
    });
  });
