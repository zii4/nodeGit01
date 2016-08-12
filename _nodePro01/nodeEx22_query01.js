var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	var query = url.parse(request.url,true).query;
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h2>' + JSON.stringify(query));
		
});

server.listen(5000, function(){
	console.log('Server running...');
});