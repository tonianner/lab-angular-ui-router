angular
  .module('InfamousCriminals', ['ui.router', 'xeditable'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('list',{
      url:'/',
      templateUrl:'list.html'
    })
    .state('new',{
      url:'/new',
      templateUrl:'new.html'
    })
    .state('about',{
      url:'/about',
      templateUrl:'about.html'
    })

  $urlRouterProvider.otherwise('/');
}