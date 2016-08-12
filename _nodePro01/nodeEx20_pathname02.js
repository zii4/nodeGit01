var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	var pathname = url.parse(request.url).path;
	console.log('Request PathName => ', pathname);
	
	if(pathname == '/')
		console.log('File: index.html');
	else if (pathname == '/profile.html')
		console.log('File: profile.html');	
			
});

server.listen(5000, function(){
	console.log('Server running...');
});