'use strict';

angular.module('app')
.component('dropdown', {
  templateUrl: 'app/components/dropdown/dropdown.html',
  controller: DropdownCtrl,
  controllerAs: 'vm',
  bindings: {
    data: '='
  }
});

function DropdownCtrl() {
  var vm = this;

  vm.selectedState = '';

  vm.change = function(item){
    vm.simpleSelectedState = item;
  };
}
