

let books = [
    {
        id: 101,
        bookName: "JavaScript Basics",
        author: "Raj Patel",
        category: "Programming",
        quantity: 5
    },
    {
        id: 102,
        bookName: "Harry Potter",
        author: "J.K. Rowling",
        category: "Fantasy",
        quantity: 3
    },
    {
        id: 103,
        bookName: "C Programming",
        author: "Dennis Ritchie",
        category: "Programming",
        quantity: 0
    }
];

document.querySelector("main").innerHTML += books.length;
document.querySelector(".display").onclick = function () {
    document.querySelector("table").classList.add("show");
    document.querySelector("tbody").innerHTML = "";
    for (const book of books) {
        document.querySelector("tbody").innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.bookName}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.quantity}</td>
            <td>${book.quantity > 0 ? "Available" : "Out Of Stock"}</td>
        </tr>`;
    }
}



document.querySelector(".add").onclick = function () {
    let book = {
        id: Number(prompt("Enter Book ID :")),
        bookName: prompt("Enter Book Name :"),
        author: prompt("Enter Author Name :"),
        category: prompt("Enter Category :"),
        quantity: Number(prompt("Enter Quantity :"))

    };
    books.push(book);
    document.querySelector("main").innerHTML = "Total Books : " + books.length;
}



document.querySelector(".search").onclick = function () {
    let name = prompt("Enter Book Name :");
    for (const book of books) {
        if (book.bookName.toLowerCase() == name.toLowerCase()) {
            alert(
                "Book Found\n\n" +
                "Book : " + book.bookName +
                "\nAuthor : " + book.author +
                "\nCategory : " + book.category +
                "\nQuantity : " + book.quantity
            );
            return;
        }

    }
    alert("Book Not Found");
}



document.querySelector(".issue").onclick = function () {
    let id = Number(prompt("Enter Book ID :"));
    for (const book of books) {
        if (book.id == id) {
            if (book.quantity > 0) {
                book.quantity--;
                alert("Book Issued Successfully");

            }
            else {
                alert("Book Out Of Stock");

            }
        }

    }

}



document.querySelector(".return").onclick = function () {
    let id = Number(prompt("Enter Book ID :"));
    for (const book of books) {
        if (book.id == id) {
            book.quantity++;
            alert("Book Returned Successfully");
        }

    }

}



document.querySelector(".delete").onclick = function () {
    let id = Number(prompt("Enter Book ID :"));
    books = books.filter((book) => {
        return book.id != id;
    });
    document.querySelector("main").innerHTML = "Total Books : " + books.length;

}



document.querySelector(".status").onclick = function () {
    let id = Number(prompt("Enter Book ID :"));
    for (const book of books) {
        if (book.id == id) {
            if (book.quantity > 0) {
                alert("Available");
            }
            else {
                alert("Out Of Stock");

            }

        }

    }

}