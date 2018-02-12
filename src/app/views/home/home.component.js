'use strict';
angular
  .module('app')
  .component('home', {
    templateUrl: 'app/views/home/home.html',
    controller: HomeController,
    controllerAs: 'vm'
  });

function HomeController($http) {
  var vm = this,
    BACKEND_URL = 'http://localhost:3000';

  loadData();


  function loadData() {
    return $http.get(BACKEND_URL + '/states').then(function(response) {
      vm.states = response.data;
      return response.data;
    });
  }
}
