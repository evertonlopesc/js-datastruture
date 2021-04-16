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
            // fazer com que as casas mude da última posição para uma posição a frente.
            for (let index = 0; index < this.count; index++) {
                /**
                 * armazenar o valor da segunda posição
                 * guardar esse segundo valor na primeira posição
                 * os demais valores posterior seguem o processo
                 */
                const element = this.items[index +1];
                this.items[index] = element;
                
            };
            delete this.items[this.count -1];
            this.count--;

        }
        
    };
    // peek prints the first element
    peek() {
        return console.log(`First in line: ${this.items[this.lowestcount]}`);
    };
    // isEmpty returns true or false
    isEmpty() {
        return this.count === 0;
    };
    // size returns the length of the queue
    size() {
        console.log(`Queue size: ${this.count}`);
    };
    // print queue
    toString() {
        console.log(this.items);
    };

};