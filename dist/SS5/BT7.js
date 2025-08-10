class Book {
    id;
    title;
    author;
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getInfo() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
}
class Library {
    books;
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBooks() {
        return this.books;
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            return true;
        }
        return false;
    }
}
const book1 = new Book("Dac Nhan Tam", "Dale Carnegie", 1);
const book2 = new Book("Nha Gia Kim", "Paulo Coelho", 2);
const book3 = new Book("Tuoi Tre Dang Gia Bao Nhieu", "Rosie Nguyen", 3);
const book4 = new Book("Harry Potter", "J.K. Rowling", 4);
const book5 = new Book("De Men Phieu Luu Ky", "To Hoai", 5);
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.updateBookById(3, "Tuổi trẻ đáng giá bao nhiêu (2025)", "Rosie Nguyen");
library.getBooks().forEach(book => {
    console.log(book.getInfo());
});
export {};
//# sourceMappingURL=BT7.js.map