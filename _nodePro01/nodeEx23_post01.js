var http = require('http');
var url = require('url');
var fs = require('fs');


var server = http.createServer(function(request, response){

	if (request.method == 'GET') {
		
		fs.readFile('./webcontents/mem_ins.htm', function(err, data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		});
	} else if (request.method == 'POST') {
		
		request.on('data', function(data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end('<h3>' + data);
		});
	}
	
});

server.listen(5000, function(){
	console.log('Server running...');
});