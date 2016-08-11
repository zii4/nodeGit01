var fs = require('fs');


try {
	fs.writeFile('fsFile01.txt','Hello World2!', 'utf8', function(err){
		if (err) throw err;
		console.log('It\'s saved.');
	});

} catch (e) {
	console.log(e);
}

try {
	var text = fs.readFile('fsFile01.txt','utf8', function(err,data){
		if (data)
			text = data;
		else
			text = err;
			
	});

	setTimeout(function(){console.log(text)},3000);

} catch (e) {
	console.log(e);
}
