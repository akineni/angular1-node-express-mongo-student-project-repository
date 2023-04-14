app.run(["$rootScope", "$http", "env", ($rootScope, $http, env) => {

    $http.get(env.BACKEND_ROOT + 'student/1').then(
        (response) => {  
            $rootScope.approved_students = response.data
        },
        (error) => { }
    )

}])