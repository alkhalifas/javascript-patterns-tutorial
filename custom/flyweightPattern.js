class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class BookFactory {
    constructor() {
        this.books = {};
    }

    createBook(title, author, isbn) {
        if (!this.books[isbn]) {
            this.books[isbn] = new Book(title, author, isbn);
        }
        return this.books[isbn];
    }
}

class BookRecord {
    constructor(book, availability, sales) {
        this.book = book;
        this.availability = availability;
        this.sales = sales;
    }
}

class BookRecordManager {
    constructor() {
        this.bookFactory = new BookFactory();
        this.bookRecords = [];
    }

    addBookRecord(title, author, isbn, availability, sales) {
        const book = this.bookFactory.createBook(title, author, isbn);
        const bookRecord = new BookRecord(book, availability, sales);
        this.bookRecords.push(bookRecord);
        return bookRecord;
    }

    getBookRecords() {
        return this.bookRecords;
    }
}

const bookRecordManager = new BookRecordManager();

const book1 = bookRecordManager.addBookRecord("Harry Potter", "JK Rowling", "AB123", false, 100);
const book2 = bookRecordManager.addBookRecord("Harry Potter", "JK Rowling", "AB123", true, 50);
const book3 = bookRecordManager.addBookRecord("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
const book4 = bookRecordManager.addBookRecord("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
const book5 = bookRecordManager.addBookRecord("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log(book1.book === book2.book); // true (Same book instance is shared)
console.log(book3.book === book4.book); // true (Same book instance is shared)
console.log(book1.book === book5.book); // false (Different book instances)
console.log(bookRecordManager.getBookRecords());
