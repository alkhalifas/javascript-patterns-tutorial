const Book = require('./book').Book;
const BookDirector = require('./director.js').BookDirector;

// simple book
let book = new Book('Design Patterns');
console.log(book);

// complex book with genre
console.log(new BookDirector({
    type: 'builder1',
    book: book,
    author: 'Eric Gamma',
    imprint: 'Wiley',
    genre: 'CS'}).construct());

// complex book with no genre
console.log(new BookDirector({
    type: 'builder2',
    book: book,
    author: 'Eric Gamma',
    imprint: 'Wiley'}).construct());
