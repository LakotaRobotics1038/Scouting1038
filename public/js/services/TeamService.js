// public/js/services/TeamService
angular.module('TeamService', []).factory('Team' ['$http', function($http) {

  return {
    // call to GET all teams
    get : function() {
        return $http.get('/api/teams')
    },
    // call to POST and create a new team
    create : function(teamData) {
      return $http.post('api/teams', nerdData)
    },
    // call to DELETE a team
    delete : function(id) {
      return $http.delete('api/team/' + id)
    }
  }
}])
