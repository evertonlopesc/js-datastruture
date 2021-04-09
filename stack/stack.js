function printConsole(param) {
    return console.log(param);
};

class Stack {
    constructor() {
        this.items = [];
    };

    push(element) {
        return console.log(
            `Inserted element: ${this.items.push(element)}`);
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
        return console.log(`Stack size: ${this.size.length}`);
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

stack.pop();

stack.push(8);

stack.peek();