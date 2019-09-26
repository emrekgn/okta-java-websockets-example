var button1 = new Nexus.Button('#button-1',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
});

button1.colorize("accent", "#FFBE0B");
button1.colorize("fill", "#333");
button1.player = new Tone.Player({"url": "/loops/loop-chill-1.wav", "loop": true, "fadeOut": 1}).toMaster();
button1.on('change', function(v) {
  if (v === true){
    this.player.restart();
  } else {
    this.player.stop();
  }
  sendEvent("button1", v);
});

var button2 = new Nexus.Button('#button-2',{
  'size': [80,80],
  'mode': 'toggle',
  'state': false
});
button2.colorize("accent", "#FB5607");
button2.colorize("fill", "#333");
button2.player = new Tone.Player({"url": "/loops/loop-drum-1.wav", "loop": true, "fadeOut": 1}).toMaster();
button2.on('change', function(v) {
  if (v === true){
    this.player.restart();
  } else {
    this.player.stop();
  }
  sendEvent("button2", v);
});
