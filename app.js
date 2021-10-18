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
                title: 'Book One',
                author: 'john Doe',
                publisher: 'Penguin Books'
            },

            {
                title: 'Book One',
                author: 'john Doe',
                publisher: 'Penguin Books'
            },

            {
                title: 'Book One',
                author: 'john Doe',
                publisher: 'Penguin Books'
            }
        ];

        const books = StoredBooks; 

        books.forEach((book) => UI.addBookToList());
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

//Event: Display book

// Event: Add a book

//Event: Remove a book