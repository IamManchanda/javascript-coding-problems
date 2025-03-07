class CustomEventEmitter {
  constructor() {
    this.__event_listeners = {
      // [event]: listeners[]
    };
  }

  on(event, listener) {
    if (!this.__event_listeners[event]) {
      this.__event_listeners[event] = [];
    }

    this.__event_listeners[event].push(listener);
    return true;
  }

  off(event, listener) {
    if (!this.__event_listeners[event]) {
      return false;
    }

    const index = this.__event_listeners[event].indexOf(listener);
    if (index === -1) {
      return false;
    }

    this.__event_listeners[event].splice(index, 1);
    return true;
  }

  once(event, listener) {
    const onceListener = (...args) => {
      listener(...args);
      this.off(event, onceListener);
    };

    this.on(event, onceListener);
    return true;
  }

  emit(event, ...args) {
    if (!this.__event_listeners[event]) {
      return false;
    }

    const listeners = this.__event_listeners[event];
    listeners.forEach((listener) => listener(...args));
    return true;
  }
}

export default CustomEventEmitter;
