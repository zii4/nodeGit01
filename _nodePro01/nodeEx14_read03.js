var fs = require('fs');

var text = fs.readFile('fsFile01.txt','utf8',
		function (err,data){
			if (data)
				text = data;
			else
				text = err;
		});

setTimeout(function(){console.log(text)},3000);