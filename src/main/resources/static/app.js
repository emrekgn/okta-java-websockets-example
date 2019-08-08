var stompClient = null;


function connect() {
    var socket = new SockJS('/looping');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/loops', function (loopEvent) {
            console.log(loopEvent);
        });
    });
}


function sendEvent(){
    stompClient.send("/topic/loops", {}, JSON.stringify({'loopId': 'drums1', 'toggle': 'ON'}));
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}