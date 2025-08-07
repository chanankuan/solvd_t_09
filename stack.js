export class Stack {
  #list = [];

  push(element) {
    this.#list.push(element);
  }

  pop() {
    if (this.empty()) {
      return null;
    }

    return this.#list.pop();
  }

  peek() {
    if (this.empty()) {
      return null;
    }

    return this.#list[this.#list.length - 1];
  }

  empty() {
    return this.#list.length === 0;
  }
}
