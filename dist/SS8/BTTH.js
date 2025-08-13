class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class textBook extends Book {
    grade;
    constructor(id, title, author, year, grade) {
        super(id, title, author, year);
        this.grade = grade;
    }
}
class comic extends Book {
    studio;
    constructor(id, title, author, year, studio) {
        super(id, title, author, year);
        this.studio = studio;
    }
}
//Xay dung lop generic library
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    getBooksById(id) {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id, updatedBook) {
        let index = this.books.find((book) => book.id === id);
        index = updatedBook;
    }
    listBooks() {
        return this.books;
    }
    findBookByTitleOrAuthor(titleOrAuthor) {
        return this.books.filter((book) => book.title.includes(titleOrAuthor) || book.author.includes(titleOrAuthor));
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBooksByYear(year) {
        return this.books.filter((book) => book.year === year);
    }
}
let library = new Library();
library.addBook({ id: 1, title: "IT", author: "author", year: 1990, studio: "studio" });
console.log(library.listBooks());
export {};
//# sourceMappingURL=BTTH.js.map