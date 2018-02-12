'use strict';
(function() {

  describe('dropdown component', function() {

    var $componentController;
    var newScope;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_, $rootScope) {
      $componentController = _$componentController_;
      newScope = $rootScope.$new();
    }));
    it('should demonstrate using when (200 status)', function() {
      var vm = $componentController('dropdown', {$scope: newScope}, null);
      var focus = {"AL": "Alabama"};
      vm.change(focus);
      expect(vm.simpleSelectedState).toEqual(focus);
    });


  });
})();
