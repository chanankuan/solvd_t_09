export class Queue {
  #list = [];

  enqueue(element) {
    this.#list.push(element);
  }

  dequeue() {
    if (this.empty()) {
      return null;
    }

    this.#list.shift();
  }

  peek() {
    if (this.empty()) {
      return null;
    }

    return this.#list[0];
  }

  empty() {
    return this.#list.length === 0;
  }
}
