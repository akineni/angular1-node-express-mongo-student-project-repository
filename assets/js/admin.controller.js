app.run(["$rootScope", "$http", "env", ($rootScope, $http, env) => {

    $http.get(env.BACKEND_ROOT + 'student').then(
        (response) => {  
            $rootScope.students = response.data
        },
        (error) => { }
    )

}])

app.controller('adminCtrl', ["$scope", "$http", "env", ($scope, $http, env) => {

    $scope.approve = (student, action=1) => {

        $http.put(
            env.BACKEND_ROOT + 'admin/approve/' + action,
            { matricNumber: student.matricNumber }
        ).then(
            (response) => {  
                if(response.data == 'repo-success'){
                    if(action == 0) delete $scope.students[$scope.students.indexOf(student)]
                    else student['approved'] = true
                }
            },
            (error) => { }
        )

    }

}])