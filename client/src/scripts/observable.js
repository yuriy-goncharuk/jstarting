export class Observable {
  constructor() {
    this.observers = [];
  }

  addObserver(obj) {
    this.observers.push(obj);
  }

  delObserver(obj) {
    this.observers.splice(this.observers.indexOf(obj));
  }

  notifyAll(e, data) {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i].on(this, e, data);
    }
  }
}
