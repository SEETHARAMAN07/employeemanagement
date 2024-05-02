angular.module('myApp', [])
.controller('MainController', function($scope, $http) {
    $http.get('/users') // Assuming your API endpoint for fetching users is '/api/users'
    .then(function(response) {
        $scope.users = response.data;
    })
    .catch(function(error) {
        console.error('Error fetching users:', error);
    });
});
