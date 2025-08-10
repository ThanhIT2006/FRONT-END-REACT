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
    getTitle() {
        return this.title;
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
    findBooksByTitle(title) {
        return this.books.filter(book => book.getTitle().toLowerCase().includes(title.toLowerCase()));
    }
    deleteBookById(id) {
        const bookIndex = this.books.findIndex(b => b.getId() === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
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
library.updateBookById(3, "Tuoi tre dang gia bao nhieu (2025)", "Rosie Nguyen");
library.getBooks().forEach(book => {
    console.log(book.getInfo());
});
const searchTitle = "Tuoi tre dang gia bao nhieu";
const foundBooks = library.findBooksByTitle(searchTitle);
console.log(`\nCac sach tim thay voi tu khoa "${searchTitle}":`);
foundBooks.forEach(book => {
    console.log(book.getInfo());
});
library.deleteBookById(2);
console.log("\nDanh sách sách sau khi xóa sách có id = 2:");
library.getBooks().forEach(book => {
    console.log(book.getInfo());
});
export {};
//# sourceMappingURL=BT9.js.map