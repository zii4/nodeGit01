var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	if (request.method == 'GET') {
		console.log('Request Method => GET');
	} else if (request.method == 'POST') {
		console.log('Request Method => POST');
	}
		
});

server.listen(5000, function(){
	console.log('Server running...');
});