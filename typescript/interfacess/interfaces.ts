interface Person {
    name: string;
    age: number;
}

function printName(person: Person) {
    console.log(person.name);
}

const john = { name: "John", age: 21 };
const mary = { name: "Mary", age: 21, phone: "91234-5678" };
printName(john);
printName(mary);

// interface Comparable {
//     compareTo(b): number;
// }
// class MyObject implements Comparable {
//     age: number;
//     compareTo(b): number {
//         if (this.age === b.age) {
//             return 0;
//         }
// 
//         return this.age > b.age ? 1 : (-1);
//     }
// }

// Genercis

interface Comparable<T> {
    compareTo(b: T): number;
}
class MyObject implements Comparable<MyObject> {
    age: number;
    compareTo(b: MyObject): number {
        if (this.age === b.age) {
            return 0;
        }

        return this.age > b.age ? 1 : (-1);
    }
}