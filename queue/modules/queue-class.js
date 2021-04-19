export default class Queue {
    constructor() {
        this.count = 0;
        this.lowestcount = 0;
        this.items = {};
    }

    // enqueue(element) adds a new element in the last position
    enqueue(element) {
        // Write the code here.
        this.items[this.count] = element;
        this.count++;
    };
    // dequeue removes the first element
    dequeue() {
        if (this.isEmpty()) {
            console.log("I can't remove it, the Queue is empty!");
        } else {
            delete this.items[this.lowestcount];
            this.lowestcount++;
        }
    };
    // peek prints the first element
    peek() {
        return console.log(`First in line: ${this.items[this.lowestcount]}`);
    };
    // isEmpty returns true or false
    isEmpty() {
        return this.size() === 0;
    };
    // size returns the length of the queue
    size() {
        return this.count - this.lowestcount;
    };
    // print queue
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestcount]}`;
        for (let i = this.lowestcount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    };

    // clear queue
    clear() {
        this.count = 0;
        this.lowestcount = 0;
        this.items = {};
        return `Size: ${this.size()} - Empty: ${this.isEmpty()}`;
    };

};