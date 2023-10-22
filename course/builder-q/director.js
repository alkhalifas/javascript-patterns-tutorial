const BookBuilder = require('./builder.js').BookBuilder;

exports.BookDirector = class BookDirector {
  constructor(info) {
      this.bookBuilder = new BookBuilder().getBuilder(info);
  }

  construct() {
    this.bookBuilder.buildPart();
    return this.bookBuilder.getResult();
  }
}
