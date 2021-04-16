import Queue from "./modules/queue-class.js";

let queue = new Queue();

console.log(queue.isEmpty());
queue.dequeue();
queue.enqueue(20);
queue.enqueue(22);
queue.enqueue(26);
queue.enqueue(31);
queue.enqueue(39);
queue.enqueue(54);
queue.toString();
queue.dequeue();
queue.toString();
queue.size();
console.log(queue.isEmpty());
queue.toString();
queue.peek();
