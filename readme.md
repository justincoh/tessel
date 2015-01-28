##Tessel Door Monitor

I bought a [tessel] to play around with, and am using the accelerometer module to spy on my sister's dog walkers for her; she doesn't think Charlie gets out enough.  

---
Tessel = node for hardware.  
This is the full code for charlieTessel/blinky.js:

```
var tessel = require('tessel');
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

setInterval(function () {
    console.log(tessel)
    led1.toggle();
    led2.toggle();
}, 1000);
```


[tessel]:https://tessel.io/
