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
 
    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#publisher').value = '';
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

    //Validate fields
    if( title === '' || author === '' || publisher === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        //Instantiate a new book
        const book = new Book(title, author, publisher);

        //Add book to list
        UI.addBookToList(book);

        //clear fields
        UI.clearFields();
    }
});

//Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
});