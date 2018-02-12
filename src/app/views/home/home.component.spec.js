'use strict';
(function() {

  describe('home view', function() {

    var $componentController;
    var newScope;
    var http;
    var httpBackend;
    var BACKEND_URL = 'http://localhost:3000',
      statesData = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FM": "Federated States Of Micronesia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
      };

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_, $rootScope, $http, $httpBackend) {
      $componentController = _$componentController_;
      newScope = $rootScope.$new();
      http = $http;
      httpBackend = $httpBackend;
    }));
    it('should demonstrate using when (200 status)', function() {

      var vm = $componentController('home', {$scope: newScope}, null);

      http.get(BACKEND_URL + '/states')
        .then(function(response) {
          vm.states = response.data;
        });

      httpBackend
        .when('GET', BACKEND_URL + '/states')
        .respond(200, statesData);

      httpBackend.flush();

      expect(vm.states).toEqual(statesData);

    });


  });
})();
