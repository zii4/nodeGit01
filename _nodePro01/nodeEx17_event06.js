
process.on('exit', function (){console.log('Bye Bye.');});

process.exit();

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('Running....');

