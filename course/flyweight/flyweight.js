// Flyweight optimized version
class Book {
  constructor(title, author, genre, pageCount, publisherID, ISBN) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
        this.publisherID = publisherID;
        this.ISBN = ISBN;
  }
}

// Book Factory singleton
const existingBooks = {};

class BookFactory {
    constructor(title, author, genre, pageCount, publisherID, ISBN) {

        // Find out if a particular book meta-data combination has been created before
        // !! or (bang bang) forces a boolean to be returned
        this.existingBook = existingBooks[ISBN];
        if (!!this.existingBook) {
            return this.existingBook;
        } else {
            // if not, let's create a new instance of the book and store it
            const book = new Book(title, author, genre, pageCount, publisherID, ISBN);
            existingBooks[ISBN] = book;
            return book;

        }
    }
}

// BookRecordManager singleton
const bookRecordDatabase = {};

class BookRecordManager {
    // add a new book into the library system
    constructor(id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
        this.book = new BookFactory(title, author, genre, pageCount, publisherID, ISBN);

        bookRecordDatabase[id] = {
            checkoutMember,
            checkoutDate,
            dueReturnDate,
            availability,
            book: this.book,
        };
    }

    updateCheckoutStatus(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {

        const record = bookRecordDatabase[bookID];
        record.availability = newStatus;
        record.checkoutDate = checkoutDate;
        record.checkoutMember = checkoutMember;
        record.dueReturnDate = newReturnDate;
    }

    extendCheckoutPeriod(bookID, newReturnDate) {
        bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    }

    isPastDue(bookID) {
        const currentDate = new Date();
        return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
    }
}


// Create book records using BookRecordManager
const book1 = new BookRecordManager(1, "Book Title 1", "Author 1", "Genre 1", 200, 1, "ISBN-123", "2023-10-01", "User 1", "2023-10-15", true);
const book2 = new BookRecordManager(2, "Book Title 2", "Author 2", "Genre 2", 250, 2, "ISBN-456", "2023-10-02", "User 2", "2023-10-16", true);

// Check out a book
book1.updateCheckoutStatus(1, false, "2023-10-02", "User 2", "2023-10-17");

// Extend checkout period
book1.extendCheckoutPeriod(1, "2023-10-25");

// Check if a book is past due
console.log("Book 1 is past due?", book1.isPastDue(1)); // Output: true (if today is after 2023-10-25)

// Try to create a new book with the same ISBN; it will reuse the existing instance
const book3 = new BookRecordManager(3, "Book Title 3", "Author 3", "Genre 3", 300, 1, "ISBN-123", "2023-10-03", "User 3", "2023-10-18", true);
console.log("Are book1 and book3 the same instance?", book1.book === book3.book); // Output: true
