

// // let arr = [

// //     {id: 10, name : "Harry Potter", book author : "J.K. Rowling", }
// // ]

// let books = [
//     {
//         id: 101,
//         name: "Harry Potter",
//         author: "J.K. Rowling",
//         category: "Fantasy",
//         quantity: 5,
//         status: "Available",
//         actions: "Edit/Delete"
//     },
//     {
//         id: 102,
//         name: "The Alchemist",
//         author: "Paulo Coelho",
//         category: "Fiction",
//         quantity: 3,
//         status: "Available",
//         actions: "Edit/Delete"
//     },
//     {
//         id: 103,
//         name: "C Programming",
//         author: "Dennis Ritchie",
//         category: "Education",
//         quantity: 0,
//         status: "Out of Stock",
//         actions: "Edit/Delete"
//     },
//     {
//         id: 104,
//         name: "Rich Dad Poor Dad",
//         author: "Robert Kiyosaki",
//         category: "Finance",
//         quantity: 2,
//         status: "Available",
//         actions: "Edit/Delete"
//     }
// ];

// // console.log(books)


// document.querySelector('.display').onclick = function () {

//     document.querySelector('table').classList.add('show');


//     for (const element of books) {


//         document.querySelector('tbody').innerHTML += `
//         <tr>
//         <td> ${element.id}</td>
//         <td> ${element.name}</td>
//         <td> ${element.author}</td>
//         <td> ${element.category}</td>
//         <td> ${element.quantity}</td>
//         <td> ${element.status}</td>
//         <td> ${element.actions}</td>

//         </tr> `;
//         for (const key in element) {
//             console.log(element[key])
//         }
//     }

// }

let books = [
    {
        id: 101,
        name: "Harry Potter",
        author: "J.K. Rowling",
        category: "Fantasy",
        quantity: 5,
        status: "Available"
    },
    {
        id: 102,
        name: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        quantity: 3,
        status: "Available"
    },
    {
        id: 103,
        name: "C Programming",
        author: "Dennis Ritchie",
        category: "Education",
        quantity: 0,
        status: "Out of Stock"
    },
    {
        id: 104,
        name: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        quantity: 2,
        status: "Available"
    }
];

function displayBooks() {

    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    document.querySelector("table").classList.add("show");

    for (const book of books) {
        tbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.quantity}</td>
            <td>${book.status}</td>
            <td>Edit / Delete</td>
        </tr>`;
    }
}

// Display Books
document.querySelector(".display").onclick = function () {
    displayBooks();
};

// Add Book
document.querySelector(".add").onclick = function () {

    let id = Number(prompt("Enter Book ID"));
    let name = prompt("Enter Book Name");
    let author = prompt("Enter Author Name");
    let category = prompt("Enter Category");
    let quantity = Number(prompt("Enter Quantity"));

    books.push({
        id: id,
        name: name,
        author: author,
        category: category,
        quantity: quantity,
        status: quantity > 0 ? "Available" : "Out of Stock"
    });

    alert("Book Added Successfully");
    displayBooks();
};

// Delete Book
document.querySelector(".delete").onclick = function () {

    let id = Number(prompt("Enter Book ID to Delete"));

    let index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        books.splice(index, 1);
        alert("Book Deleted");
    } else {
        alert("Book Not Found");
    }

    displayBooks();
};

// Issue Book
document.querySelector(".issue").onclick = function () {

    let id = Number(prompt("Enter Book ID"));

    let book = books.find(book => book.id === id);

    if (book && book.quantity > 0) {
        book.quantity--;

        if (book.quantity === 0) {
            book.status = "Out of Stock";
        }

        alert("Book Issued");
    } else {
        alert("Book Not Available");
    }

    displayBooks();
};

// Return Book
document.querySelector(".return").onclick = function () {

    let id = Number(prompt("Enter Book ID"));

    let book = books.find(book => book.id === id);

    if (book) {
        book.quantity++;
        book.status = "Available";

        alert("Book Returned");
    } else {
        alert("Book Not Found");
    }

    displayBooks();
};

// Available Books
document.querySelector(".available").onclick = function () {

    let availableBooks = books.filter(book => book.quantity > 0);

    console.log("Available Books:");
    console.log(availableBooks);

    alert("Available books console me display hui hai.");
};

// Total Book Count
// document.querySelector(".count").onclick = function () {

//     let total = 0;

//     for (const book of books) {
//         total += book.quantity;
//     }

//     alert("Total Books: " + total);
// };

document.querySelector(".count").onclick = function () {

    let total = 0;

    for (const book of books) {
        total += book.quantity;
    }

    alert("Total Books = " + total);
};

document.querySelector(".count").onclick = function () {
    alert("Total Books = " + books.length);
};