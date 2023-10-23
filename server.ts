import { WebSocketClient, WebSocketServer } from "https://deno.land/x/websocket@v0.1.4/mod.ts";

const wss = new WebSocketServer(8080);
wss.on("connection", function (ws: WebSocketClient) {
    ws.on("message", function (message: string) {
        console.log(message);
        ws.send(message);
    });

    setInterval(() => {

        let num = Math.floor(Math.random() * 10000);

        ws.send("Numero -> " + num.toString())
    }, 1000)

});


