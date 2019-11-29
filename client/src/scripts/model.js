import { Observable } from "./observable";
import { Message } from "./message";
export class Model extends Observable {
  constructor() {
    super();
    this.messages = []; //db in array lol
  }
  addMessage(content) {
    this.messages.push(new Message(content));
  }
  putLastMessageIntoView() {
    this.notifyAll("view_take_this", this.messages[this.messages.length - 1]);
  }
  on(obj, event, data) {
    if (event == "data_ok_lets_send_it") {
      this.addMessage(data);
      this.putLastMessageIntoView();
    }
  }
}
