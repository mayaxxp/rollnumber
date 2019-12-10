export default {
    ws: null,
    init(userId,onMessage, onError) {
        if (!this.ws) {
            this.ws = new WebSocket(`ws://ysxy.liangziqishi.shop/webSocket2/${userId}`);
        }

        this.ws.onmessage = event => onMessage(event.data);

        this.ws.onerror = err => onError(err);

        this.ws.onclose = _ => this.ws = null
    },
    send(text) {
        if (text !== null) {
            this.ws.send(text);
        }
    }
}