// Javascript objects are composed of key and value

// How Create a Object 
let obj = new Object();

// Or
let objt = {};

// Or
let objct = {
    name: {
        first: "Gandalf",
        last: "The White"
    },
    address: "Middle Earth"
};

// Javascript Class

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

// Instance this class
let book = new Book("title", "pages", "isbn");

book.title = "Name Book";
book.pages = 365;
book.isbn = "No about";
console.log(book);

// Function/Methods in class
Book.prototype.printTitle = function() {
    console.log(this.title);
};

book.printTitle();

// Or can I do

function Books(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printTitles = function() {
        console.log(this.title);
    };
};
 books = new Books("title", "pages", "isbn");
 books.printTitles();

 class xBook {
     constructor(title, pages, isbn) {
         this.title = title;
         this.pages = pages;
         this.isbn = isbn;
     };
     xPrintIsbn() {
         console.log(this.isbn);
     };
 };

 let xbook = new xBook("title", "pages", "isbn");
 console.log(xbook.title);
 xbook.title = "new title";
 console.log(xbook.title);
 xbook.xPrintIsbn();

// Herança
 class ITBook extends Books {
     constructor(title, pages, isbn, technology) {
         super(title, pages, isbn, technology);
         this.technology = technology;
     }
     printTechnology() {
         console.log(this.technology);
     }
 };

 let jsBook = new ITBook("Learning JS Algorithms", "200", "1234567890", "Javascript");
 console.log(jsBook.title + " Aqui");
 console.log(jsBook.printTechnology());

 //GETTERS e SETTERS

 class Person {
     constructor(name) {
         this._name = name;  // Atributo privado
     }
     get name() {
         return this._name;
     }
     set name(value) {
         this._name = value;
     }
 };

 let lotrChar = new Person("Frodo");
 console.log(lotrChar.name);
 lotrChar.name = "Gandalf";
 console.log(lotrChar.name);
 lotrChar._name = "Sam";
 console.log(lotrChar.name);