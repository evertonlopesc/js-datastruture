import Queue from "./modules/queue-class.js";

const queue = new Queue();

console.log(`Is empty: ${queue.isEmpty()}`);
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("James");
queue.enqueue("Alexis");
console.log(`Is empty: ${queue.isEmpty()}`);
console.log(queue.toString());
console.log(`Queue size: ${queue.size()}`);
queue.dequeue();
console.log(queue.toString());
console.log(`Queue size: ${queue.size()}`);
console.log(`Is empty: ${queue.isEmpty()}`);
console.log(queue.toString());
queue.peek();
queue.dequeue();
console.log(queue.toString());
console.log(`Queue size: ${queue.size()}`);
