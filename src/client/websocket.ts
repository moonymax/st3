import { isServer } from "solid-js/web";

let socket: any;
export function getSocket() {
    if (isServer) {

    } else {
        if (!socket) {
            socket = new WebSocket("ws://localhost:3001");
            socket.addEventListener("open", (e: Event) => {
                console.log("the websocket was opened on the client");
                socket.addEventListener("message", (e: MessageEvent) => {
                    console.log("a new message: " + e.data);

                });

            });
        }
    }
    return socket;
}

