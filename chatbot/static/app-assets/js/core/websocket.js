var ws = undefined;
var ws_connected = false;
$(document).ready(function () {
    if ("WebSocket" in window) {
        var protocol = window.location.protocol == 'https:'? 'wss:': 'ws:';
        var websocket_url = protocol + '//' + window.location.host;
        ws = new WebSocket(websocket_url);

        ws.addEventListener('open', function () {
            ws_connected = true;
            console.log('Server Connected.')
        });

        ws.addEventListener('close', function () {
            ws_connected = false;
            console.log('Closing WS server!');
        });
    }
});
