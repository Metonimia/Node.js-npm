var os = require('os');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}
	console.log('System:'.magenta.bold, type);
	console.log('Release:'.cyan.italic, release);
	var cpu = os.cpus()[0].model;
	console.log('CPU model:'.green, cpu);
	var uptime = os.uptime();
	console.log('Uptime:'.blue.bgMagenta, (uptime/60).toFixed(0), 'min');
	var userInfo = os.userInfo();
	console.log('User name:'.rainbow, userInfo.username);
	console.log('Home dir:'.random, userInfo.homedir);
}


exports.print = getOSinfo;