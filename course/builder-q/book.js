exports.Book = class Book {
  constructor(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
  }
  setImprint(imprint) {
    this.imprint = imprint;
  }
  setGenre(genre) {
    this.genre = genre;
  }
}
