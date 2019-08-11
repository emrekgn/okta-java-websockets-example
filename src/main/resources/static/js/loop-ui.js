var button1 = new Nexus.Button('#button-1',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})

button1.colorize("accent", "#FFBE0B")
button1.colorize("fill", "#333")
button1.player = new Tone.Player({"url": "/loops/loop-chill-1.wav", "loop": true, "fadeOut": 1}).toMaster();
button1.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})


var button2 = new Nexus.Button('#button-2',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})
button2.colorize("accent", "#FB5607")
button2.colorize("fill", "#333")
button2.player = new Tone.Player({"url": "/loops/loop-chill-2.wav", "loop": true, "fadeOut": 1}).toMaster();
button2.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})



var button3 = new Nexus.Button('#button-3',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})

button3.colorize("accent", "#FF006E")
button3.colorize("fill", "#333")
button3.player = new Tone.Player({"url": "/loops/loop-drum-1.wav", "loop": true, "fadeOut": 1}).toMaster();
button3.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})




var button4 = new Nexus.Button('#button-4',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})

button4.colorize("accent", "#8338EC")
button4.colorize("fill", "#333")
button4.player = new Tone.Player({"url": "/loops/loop-drum-2.wav", "loop": true, "fadeOut": 1}).toMaster();
button4.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})


var button5 = new Nexus.Button('#button-5',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})

button5.colorize("accent", "#3A86FF")
button5.colorize("fill", "#333")
button5.player = new Tone.Player({"url": "/loops/loop-drum-3.wav", "loop": true, "fadeOut": 1}).toMaster();
button5.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})


var button6 = new Nexus.Button('#button-6',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})

button6.colorize("accent", "#E15554")
button6.colorize("fill", "#333")
button6.player = new Tone.Player({"url": "/loops/loop-trumpet-1.wav", "loop": true, "fadeOut": 1}).toMaster();
button6.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})


var button7 = new Nexus.Button('#button-7',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})

button7.colorize("accent", "#4D9DE0")
button7.colorize("fill", "#333")
button7.player = new Tone.Player({"url": "/loops/loop-trumpet-2.wav", "loop": true, "fadeOut": 1}).toMaster();
button7.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})


var button8 = new Nexus.Button('#button-8',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})

button8.colorize("accent", "#E1BC29")
button8.colorize("fill", "#333")
button8.player = new Tone.Player({"url": "/loops/loop-voice-1.wav", "loop": true, "fadeOut": 1}).toMaster();
button8.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})

var button9 = new Nexus.Button('#button-9',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
})

button9.colorize("accent", "#A20021")
button9.colorize("fill", "#333")
button9.player = new Tone.Player({"url": "/loops/loop-voice-2.wav", "loop": true, "fadeOut": 1}).toMaster();
button9.on('change', function(v) {
    if (v === true){
        this.player.restart();
    } else {
        this.player.stop();
    }
})
