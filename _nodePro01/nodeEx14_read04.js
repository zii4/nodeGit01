var fs = require('fs');

try {
	var text = fs.readFileSync('fsFile02.txt','utf8');

	console.log(text);

} catch (e) {
	console.log(e);
}


