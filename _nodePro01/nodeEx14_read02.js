var fs = require('fs');

var text;

fs.readFile('fsFile01.txt','utf8', function (err,data){console.log(data); text = data;});

console.log(text);

setTimeout(function(){console.log(text)},3000);