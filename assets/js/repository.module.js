var deps = []
try{
	angular.module("ngAnimate");
	deps.push("ngAnimate");
}catch(e){}

var app = angular.module('repository', deps)

app.constant('env', {
    BACKEND_ROOT: 'http://localhost:3000/',
    FILE_COUNT: 2
})