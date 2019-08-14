var stompClient = null;


function connect() {
    var socket = new SockJS('/looping');
    stompClient = Stomp.over(socket);
    stompClient.connect({"Authorization": "Bearer 123"}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/loops', function (message) {
            console.log(loopEvent);
            var loopEvent = JSON.parse(message.body);
            console.log(loopEvent);
            var button = eval(loopEvent.loopId);
            if (button.state !== loopEvent.value) {
                button.state = loopEvent.value;
                if (loopEvent.value === true) {
                    button.player.restart();
                } else {
                    button.player.stop();
                }
            }
        });
    });
}


function sendEvent(loopId, value){
    stompClient.send("/topic/loops", {}, JSON.stringify({'loopId': loopId, 'value': value}));
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}


function toggleMute(){
    Tone.context.resume();
}