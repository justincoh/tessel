var tessel = require('tessel');
// var fs = require('fs');  //not compatible
// var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(1);
var led3 = tessel.led[2].output(0);


////Launch this with tessel run test.js -u './logs/'
//// -u specifies directory for sendfile

setInterval(function () {
    var test = new Date();
    test=test.toString().slice(0,24);
	// led1.toggle();
	process.sendfile()
    led2.toggle();
    led3.toggle();
    process.sendfile(test,test);

	

}, 1500);