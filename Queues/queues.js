class Queue {
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // enqueue(item)
  enqueue(item) {
    this.items.push(item);
  }
  // dequeue()
  dequeue() {
    this.items.length > 0 ? this.items.shift() : console.log("Not enough items");
  }
  // front()
  front() {
    return this.items[0];
  }
  // isEmpty()
  // printQueue()
}