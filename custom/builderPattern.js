
// Book Class
class Book {
    constructor(title, author, genre, pageCount) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
    }
}

// Builder: BookBuilder
class BookBuilder {
    constructor(title) {
        this.title = title;
    }

    setAuthor(author) {
        this.author = author;
        return this;
    }

    setGenre(genre) {
        this.genre = genre;
        return this;
    }

    setPageCount(pageCount) {
        this.pageCount = pageCount;
        return this;
    }

    build() {
        return new Book(this.title, this.author, this.genre, this.pageCount);
    }
}

const book1 = new BookBuilder("Sample Book 1").setAuthor("Saleh").build()
const book2 = new BookBuilder("Sample Book 2").setAuthor("Sammy").setGenre("Fiction").setPageCount(42).build()

console.log("Book1: ", book1)
console.log("Book2: ", book2)
