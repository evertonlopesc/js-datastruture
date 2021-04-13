export default class StackObject {
    constructor() {
        this.count = 0;
        this.items = {};
    };

    push(element) {
        if (element == undefined) {
            console.log("Error, invalid value!!!");
        } else {
            console.log("Successfully inserted");
            this.items[this.count] = element;
            this.count++;
            console.log(this.items);
        };
    };

    isEmpty() {
        return console.log("Empty: " + (this.count === 0));
    };

    size() {
        return console.log("Size: "+ this.count);
    };

    pop() {
        if (this.count === 0) {
            return console.log("The Stack is empty, it cannot be removed!");
        } else {
            this.count--;
            const result = this.items[this.count];
            delete this.items[this.count];
            console.log("Successfully removed");
            console.log(this.items);
            return result;
        }
        
    };

    peek() {
        if (this.count === 0) {
            console.log("The Stack is empty!");
        } else {
            return console.log("Last object: " + this.items[this.count - 1]);
        }
    };

    clear() {
        this.items = {};
        this.count = 0;
        console.log(this.items);
    };
};