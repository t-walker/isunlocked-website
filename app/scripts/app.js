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

    $stateProvider.state('mission', {
      url: '/mission',
      templateUrl: 'views/mission.html',
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

    $stateProvider.state('cfp-panel', {
      url: '/cfp-panel',
      templateUrl: 'views/events/cfp_panel.html',
    });

    $stateProvider.state('diversity-panel', {
      url: '/diversity-panel',
      templateUrl: 'views/events/diversity_panel.html',
    });

    $stateProvider.state('board', {
      url: '/board',
      templateUrl: 'views/board.html',
      controller: 'ReviewBoardCtrl',
      controllerAs: 'reviewBoard'
    });

    $stateProvider.state('faq', {
      url: '/faq',
      templateUrl: 'views/faq.html',
    });

    $stateProvider.state('dc25', {
      url: '/dc25',
      templateUrl: 'views/events/dc25.html',
    });

    $stateProvider.state('dc25party', {
      url: '/dc25party',
      templateUrl: 'views/events/dc25party.html',
    });


    $stateProvider.state('cfp-resources', {
      url: '/cfp_resources',
      templateUrl: 'views/cfp.html',
    });

    $stateProvider.state('past-events', {
      url: '/past-events',
      templateUrl: 'views/past_events.html',
    });
  });
