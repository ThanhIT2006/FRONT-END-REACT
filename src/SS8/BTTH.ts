class Book{
    id:number;
    title:string;
    author:string;
    year:number;
    constructor(id:number, title:string, author:string, year:number){
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class textBook extends Book{
    grade:string;
    constructor(id:number, title:string, author:string, year:number, grade:string){
        super(id, title, author, year);
        this.grade = grade;
    }
}
class comic extends Book{
    studio:string;
    constructor(id:number, title:string, author:string, year:number, studio:string){
        super(id, title, author, year);
        this.studio=studio;
    }
}
//Xay dung lop generic library
class Library<T extends Book> {
    books: T[] = [];
    addBook(book: T): void {
        this.books.push(book);
    }
    getBooksById(id:number): T | undefined {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id:number): void {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id:number, updatedBook: T): void {
        let index = this.books.find((book) => book.id === id);
        index=updatedBook;
    }
    listBooks(): T[] {
        return this.books;
    }
    findBookByTitleOrAuthor(titleOrAuthor:string):T[] {
        return this.books.filter((book) => book.title.includes(titleOrAuthor) || book.author.includes(titleOrAuthor));
    }
    getTotalBooks():number{
        return this.books.length;
    }
    findBooksByYear(year:number):T[]{
        return this.books.filter((book)=>book.year===year);
    }
}
let library = new Library<comic>();
library.addBook({id:1,title:"IT",author:"author",year:1990, studio:"studio"});
console.log(library.listBooks());
