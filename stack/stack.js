import StackObject from "./modules/stack-object.js";

function printConsole(param) {
    return console.log(param);
};

class Stack {
    constructor() {
        this.items = [];
    };

    push(element) {
        return console.log(
            `${this.items.push(element)}º element inserted`);
    };

    pop() {
        return console.log(
            `Element removed: ${this.items.pop()}`);
    };

    peek() {
        return console.log(
            `Last element: ${this.items[this.items.length -1]}`);
    };

    isEmpty() {
        return console.log(
            `Empty stack: ${this.items.length === 0}`);
    };

    size() {
        return console.log(`Stack size: ${this.items.length}`);
    };

    clear() {
        this.items = [];
    };
};

const stack = new Stack();
stack.isEmpty();

stack.push(5);
stack.push(8);
printConsole(stack);
stack.peek();
stack.push(11);
stack.size();
stack.isEmpty();
stack.push(15);
stack.pop();
stack.pop();
stack.size();

/********************************************************************** */

let miniStack = new StackObject();

miniStack.push(10);
miniStack.push(15);
miniStack.isEmpty();
miniStack.size();

console.log(miniStack);
miniStack.pop();
miniStack.pop();
miniStack.pop();
miniStack.peek();
miniStack.push(5);
miniStack.push(8);
miniStack.push(11);
miniStack.peek();
miniStack.clear();
miniStack.push(5);
miniStack.push(8);
miniStack.push(11);
miniStack.toString();
miniStack.pop();
miniStack.pop();
miniStack.toString();
miniStack.push(8);
miniStack.toString();