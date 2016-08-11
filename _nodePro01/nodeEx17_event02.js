
process.on('exit',function(){
	console.log('Exit Event');
});

process.on('uncaughtException',function(err){
	console.log('uncaughtException => ' + err);
});

error.error.error();

