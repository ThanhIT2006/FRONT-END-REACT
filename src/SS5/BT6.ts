class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    getInfo(): string {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}
class Library {
    private books: Book[];
    constructor() {
        this.books = [];
    }
    addBook(book: Book): void {
        this.books.push(book);
    }
    getBooks(): Book[] {
        return this.books;
    }
}
const book1 = new Book("Dac Nhan Tam", "Dale Carnegie");
const book2 = new Book("Nha Gia Kim", "Paulo Coelho");
const book3 = new Book("Tuoi Tre Dang Gia Bao Nhieu", "Rosie Nguyen");
const book4 = new Book("Harry Potter", "J.K. Rowling");
const book5 = new Book("De Men Phieu Luu Ky", "To Hoai");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.getBooks().forEach((book, index) => {
    console.log(`Book ${index + 1}: ${book.getInfo()}`);
});