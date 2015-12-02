angular
.module('InfamousCriminals')

.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
})

.controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http', '$scope', '$state'];

  function CriminalsController($http, $scope, $state){
    $scope.all = [];
    $scope.addCriminal = addCriminal;
    $scope.newCriminal = {};
    $scope.getCriminals = getCriminals;
    $scope.deleteCriminal = deleteCriminal;

    getCriminals();
    function getCriminals(){
      $http
        .get('http://localhost:3000/criminals')
        .then(function(response){
          $scope.all = response.data.criminals;
      });
    }

    function addCriminal(){
      $http
        .post('http://localhost:3000/criminals', $scope.newCriminal)
        .then(function(response){
          getCriminals();
          $state.go('list');
      });
      $scope.newCriminal = {};
    }

    function deleteCriminal(criminal){
      $http
        .delete("http://localhost:3000/criminals/" + criminal._id)
        .then(function(response){
          var index = $scope.all.indexOf(criminal);
          $scope.all.splice(index, 1);
        });
    }

  }