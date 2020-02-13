class Stack {
  constructor() {
    this.items = [];
  }
  // Functions to be implemented
  // push(item) -- Adds an element to the top of stack
  push(element) {
    this.items.push(element);
  }
  // pop() -- Delete an element from the top of the stack
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
  // peek() -- Returns the top most element from of the stack but doesn't delete it
  peek() {
    return this.items[this.items.length - 1];
  }
  // isEmpty()
  isEmpty() {
    return this.items.length === 0;
  }
  // printStack()
  printStack() {
    if (this.items) {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";

      }
      return str;
    }
  }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());