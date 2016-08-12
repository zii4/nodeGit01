var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	var pathname = url.parse(request.url).path;
	console.log('Request PathName => ', pathname);
		
});

server.listen(5000, function(){
	console.log('Server running...');
});