var http = require('http');
var url = require('url');
var fs = require('fs');


var server = http.createServer(function(request, response){
	var path = url.parse(request.url).path;
	console.log('Request PathName => ', path);
	
	if (path == '/') {
		
		fs.readFile('./webcontents/main.htm', function(err, data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		});
	} else if(path == '/profile.htm'){
		fs.readFile('./webcontents/profile.htm', function(err, data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		});
	}
	
});

server.listen(5000, function(){
	console.log('Server running...');
});