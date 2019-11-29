import { Observable } from "./observable";

export class View extends Observable {
  constructor() {
    super();
    const send_button = document.getElementById("button");
    this.input_field = document.getElementById("input");
    this.messagesBox = document.getElementById("messages");
    this.autorizate = document.getElementById("autorizate");
    this.aoutowindow = document.getElementById("autenfication");
    this.username = document.getElementById("username");
    this.password = document.getElementById("password");

    autorizate.addEventListener(
      "click",
      function(event) {
        this.aoutowindow.style.display = "none";
        this.notifyAll("somebody wants to came in", [
          this.username.value,
          this.password.value
        ]);
      }.bind(this)
    );

    send_button.addEventListener(
      "click",
      function(event) {
        this.notifyAll("user_wants_to_send", this.input_field.value);
      }.bind(this)
    );

    this.input_field.addEventListener(
      "keyup",
      function(event) {
        if (event.keyCode === 13) {
          this.notifyAll("user_wants_to_send", this.input_field.value);
        }
      }.bind(this)
    );
  }
  putMessageIntoDoc(mess) {
    this.messagesBox.appendChild(this.messageInDiv(mess));
    this.input_field.value = "";
    let interval = this.messagesBox.scrollHeight;
    this.messagesBox.scrollTop = interval;
  }
  messageInDiv(message) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    const content = document.createElement("div");
    content.className = "message_content";
    const info = document.createElement("div");
    info.className = "message_info";
    content.innerHTML = message.content;
    info.innerHTML = message.date;
    bubble.appendChild(content);
    bubble.appendChild(info);
    return bubble;
  }
  on(obj, event, data) {
    if (event == "view_take_this") {
      this.putMessageIntoDoc(data);
    }
    if (event == "log in") {
      console.log("logiiiiin");
      this.aoutowindow.style.display = "none";
    }
  }
}
