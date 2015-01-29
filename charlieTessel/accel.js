var tessel= require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);
var request = require('request');
var _ = require('underscore');
var led1 = tessel.led[1];

var postRequest = function(formToSend){
	request.post('https://charlieapp.firebaseio.com/.json'
							,{form: formToSend}
							,function(err,res){
				if(err) throw err;
				console.log('Success: ',res.body.toString());
			}
	);
};
var throttled = _.throttle(postRequest,60000);

accel.on('ready',function(){
	accel.setScaleRange(8,function(){
		console.log('Scale range set')
	});
	accel.setOutputRate(1,function(){
		console.log('Output rate set')
	});

	accel.on('data',function(xyz){
		if(Math.abs(xyz[0])>.1){
			led1.high();
			var now = Date();
			var dataToSend = {time:now};
			var formToSend = JSON.stringify(dataToSend);
			throttled(formToSend);
		} else {led1.low()}
	});
});