var fs = require('fs');


try {
	fs.writeFileSync('fsFile02.txt','Hello World!!!', 'utf8');

	console.log('It\'s saved.');

} catch (e) {
	console.log(e);
}

try {
	var text = fs.readFileSync('fsFile02.txt','utf8');

	console.log(text);

} catch (e) {
	console.log(e);
}
