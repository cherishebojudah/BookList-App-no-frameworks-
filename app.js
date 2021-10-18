//Book class: Represent a book
class Book {
    constructor(title, author, publisher) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
}

//UI class: Handle UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'A time to Kill',
                author: 'John Grisham',
                publisher: 'Penguin Books'
            },

            {
                title: 'Midnight Stalker',
                author: 'Julia Roberts',
                publisher: 'Hallmark Books'
            },

            {
                title: 'The Pelican Brief',
                author: 'Dan Brown',
                publisher: 'Whitewater Books'
            }
        ];

        const books = StoredBooks; 

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.publisher}</td>
            <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `;

        list.appendChild(row);
    }
}

//Store class; Handles storage

//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent default submit action
    e.preventDefault();
    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const publisher = document.querySelector('#publisher').value;

    //Instantiate a new book
    const book = new Book(title, author, publisher);

    //Add book to list
    UI.addBookToList(book);
});

//Event: Remove a book