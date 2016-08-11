const os = require('os');

console.log( 'Hostname: ',  os.hostname() );
console.log( 'Type: ',  os.type() );
console.log( 'Platform: ',  os.platform() );
console.log( 'Arch: ',  os.arch() );
console.log( 'Release: ',  os.release() );
console.log( 'Uptime: ',  os.uptime() );
console.log( 'Loadavg: ',  os.loadavg() );
console.log( 'Totalmem: ',  os.totalmem() );
console.log( 'Cpus: ',  os.cpus() );
console.log( 'NetworkInterface: ',  os.networkInterfaces() );
