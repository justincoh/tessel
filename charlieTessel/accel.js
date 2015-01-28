var tessel= require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);
var request = require('request');
var led2 = tessel.led[2];
var led1 = tessel.led[1];

accel.on('ready',function(){
	accel.setScaleRange(8,function(){
		console.log('Scale range set')
	});
	accel.setOutputRate(1,function(){
		console.log('Output rate set')
	});
	accel.on('data',function(xyz){
		if(log.length>5){
		////Launch this with tessel run accel.js -u './logs/'
		//// -u specifies directory for sendfile
		// 	process.sendfile('Log#'+ i,log);
			request.post('http://192.168.0.6:3000',function(err,res){
				if(err) throw err;
				console.log('Post Success')
			});
		}
		if(Math.abs(xyz[0])>.1){
			led1.high();
			log.push(Date());
		} else {led1.low()}
	});
});