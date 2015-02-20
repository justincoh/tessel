var tessel = require('tessel');
var ambientlib = require('ambient-attx4');
var ambient = ambientlib.use(tessel.port['A']);
var led1 = tessel.led[1];
var request = require('request');

var postRequest = function(formToSend){
  request.post('https://charlieapp.firebaseio.com/.json'
              ,{form: formToSend}
              ,function(err,res){
        if(err) throw err;
        // console.log('Success: ',res.body.toString());
      }
  );
};



ambient.on('ready', function () {
  console.log('Ready')
 
  // Set a sound level trigger
  // The trigger is a float between 0 and 1
  ambient.setSoundTrigger(0.1);

  ambient.on('sound-trigger', function(data) {
    // console.log("Something happened with sound: ", data);
    led1.high();

    var now = new Date();
    now.setUTCHours(-4);
    var timeStamp = now.toUTCString()+" -5:00";
    var dataToSend = JSON.stringify({time:timeStamp});
    postRequest(dataToSend);


    // Clear it
    ambient.clearSoundTrigger();

    //After 30 seconds reset sound trigger
    setTimeout(function () {
        led1.low();
        ambient.setSoundTrigger(0.1);

    },30000);

  });
});

ambient.on('error', function (err) {
  console.log(err)
});
