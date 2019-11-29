import { Observable } from "./observable";

export class Controller extends Observable {
  constructor() {
    super();
  }

  on(obj, event, data) {
    if (event == "user_wants_to_send") {
      if (this.checkData(data)) {
        this.notifyAll("data_ok_lets_send_it", data);
      }
    }
    if ((event == "somebody wants to came in", data)) {
      if (this.Security(data)) {
        this.notifyAll("log in", data);
      }
    }
  }

  checkData(data) {
    if (data != "") return true;
  }
  Security(data) {
    if (data[0] != "admin") {
      console.log(data[0]);
      return false;
    }
    if (data[1] != "admin") {
      console.log(data[1]);
      return false;
    }
    return true;
  }
}
