app.controller('uploadCtrl', ["$scope", "$http", "env", ($scope, $http, env) => {

    function checkFiles(files) {
        $scope.feedback = ''
        if (files.length == 0 || files.length  > env.FILE_COUNT) {
            $scope.feedback = 'Invalid number of files'
            return false
        }

        var ext = Object.values(files).map(file => file.name.split('.').pop())

        if(files.length == env.FILE_COUNT && ext[0] == ext[1]) {
            $scope.feedback = 'Same file format'
            return false
        }

        ext = ext.filter(e => {
            switch (e) {
                case 'doc':
                case 'docx':
                case 'zip':
                case 'rar':
                    return true
                default:
                    $scope.feedback = 'File format not accepted'
                    return false
            }
        })
        if(ext.length != files.length) return false; else return true
    }
    
    $scope.upload = () => {

        $scope.loading = true

        var files = document.getElementById('file').files
        if (!checkFiles(files)) return

        var fd = new FormData()
        Object.entries($scope.student).forEach(([key, value]) => { fd.append(key, value) })
        angular.forEach(files, (file) => { fd.append('files', file) })
        
        $http.post(
            env.BACKEND_ROOT + 'student/upload',
            fd,
            {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }
        ).then(
            (response) => {  
                if(response.data == 'repo-success'){
                    $('#exampleModalCenter').modal()

                    $scope.student = {}
                    $scope.uploadForm.$setPristine(true)
                    $scope.uploadForm.$setUntouched()
                }
            },
            (error) => {
                $scope.feedback = error.data
            }
        )
    }
}])