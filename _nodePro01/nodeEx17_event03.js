

var uncaughtException = function(err){
	console.log('uncaughtException => ' + err);
}

process.on('uncaughtException', uncaughtException);

process.removeListener('uncaughtException',uncaughtException);

error.error.error();

