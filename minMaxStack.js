export class MinMaxStack {
  #stack = [];
  #minStack = [];
  #maxStack = [];

  push(value) {
    this.#stack.push(value);

    if (this.#minStack.length === 0 || value <= this.getMin()) {
      this.#minStack.push(value);
    }

    if (this.#maxStack.length === 0 || value >= this.getMax()) {
      this.#maxStack.push(value);
    }
  }

  pop() {
    if (this.#stack.length === 0) return null;

    const value = this.#stack.pop();

    if (value === this.getMin()) this.#minStack.pop();
    if (value === this.getMax()) this.#maxStack.pop();

    return value;
  }

  getMin() {
    return this.#minStack[this.#minStack.length - 1];
  }

  getMax() {
    return this.#maxStack[this.#maxStack.length - 1];
  }
}
