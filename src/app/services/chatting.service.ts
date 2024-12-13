import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChattingService {
  public message: Subject<string> = new Subject<string>();
  private websocket: WebSocket;

  constructor() {
    this.websocket = new WebSocket('ws://localhost:8080/ws');

    this.websocket.onmessage = (e: MessageEvent) => {
      this.message.next(e.data);
      console.log(e.data)
    }

    this.websocket.onerror = (err) => {
      console.log(err);
    }
  }

  sendMessage(receiver: string, message: string) {
    var message:string = JSON.stringify({receiver: receiver, message: message});
    this.websocket.send(message);
  }

  // Close WebSocket connection
  close() {
    this.websocket.close();
  }
}
