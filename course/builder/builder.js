class BookBuilder {
    buildPart() {}

    getBuilder(info) {
        switch (info.type) {
            case 'builder1':
                return new BookBuilder1(info.book, info.author, info.imprint, info.genre);
            case 'builder2':
                return new BookBuilder2(info.book, info.author, info.imprint);
            default:
                return new BookBuilder2(info.book, info.author, info.imprint);
        }
    }
}

class BookBuilder1 extends BookBuilder {
  constructor(book, author, imprint, genre) {
    super();
    this.book = book;
    this.author = author;
    this.imprint = imprint;
    this.genre = genre;
  }

  buildPart() {
    this.buildAuthor();
    this.buildImprint();
    this.buildGenre();
  }

  buildAuthor() {
    this.book.setAuthor(this.author);
  }

  buildImprint() {
    this.book.setImprint(this.imprint);
  }

  buildGenre() {
    this.book.setGenre(this.genre);
  }

  getResult() {
    return this.book;
  }
}

class BookBuilder2 extends BookBuilder {
  constructor(book, author, imprint) {
    super();
    this.book = book;
    this.author = author;
    this.imprint = imprint;
  }

  buildPart() {
    this.buildAuthor();
    this.buildImprint();
    this.buildGenre();
  }

  buildAuthor() {
    this.book.setAuthor(this.author);
  }

  buildImprint() {
    this.book.setImprint(this.imprint);
  }

  buildGenre() {
    this.book.setGenre('N/A');
  }

  getResult() {
    return this.book;
  }
}

exports.BookBuilder = BookBuilder;