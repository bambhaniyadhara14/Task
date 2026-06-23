// ------------TASK-1 Student Information System--------------

// var student = {
//     rollNo: 12,
//     name: "Dhara",
//     course: "FullStack",
//     marks: 550,

// };


// 1. Display all student details.
// console.log(student);


// 2. Update the marks.
// i. using dot Notation
//student.rollNo=14;
// ii. using Bracket Notation
// student["course"] ="AIML";
// console.log(student);


// 3. Add a new property `grade`.
//    student.grade = "A";
//    console.log(student);


// 4. Delete the `course` property.
// delete student.name;
// console.log(student);



// 5. Print all properties using a `for...in` loop. -->
// for (const key in student) {
//     console.log(key, student[key]);
// }



// -------------TASK-2 E-Commerce Product--------------



// var product = {
//     productId: 101,
//     productName: "Laptop",
//     price: 60000,
//     stock: 22,
// };


// 1. Display product details.
// console.log(product);


// 2. Change the price.
// product.price = 70000;
// console.log(product);


// 3. Add a property `category`.
// product.category = "Electronics";
// console.log(product);


// 4. Remove the `stock` property.
// delete product.stock;
// console.log(product);


// 5. Create a method `productInfo()` that displays all product information.

// var product = {
//     productId: 101,
//     productName: "Laptop",
//     price: 60000,
//     stock: 22,

//     ProductInfo: function () {
//         console.log(`Product ID:  ${this.productId}.\nProduct Name:  ${this.productName}.\nProduct Price:  ${this.price}.\nProduct Stock: ${this.stock}.`);

//     }
// };
// console.log(product);
// product.ProductInfo();



// -------------TASK-3  Employee Management--------------



// var employee = {
//     empId: 11,
//     empName: "Raj",
//     department: "Management",
//     salary: 40000,

// };


// 1. Display employee details.
// console.log(employee);


// 2. Increase salary by 10%.
//   employee.salary += employee.salary *10/100;
//   console.log(employee);


// 3. Add a property `experience`.
// employee.experience = "5 Years";
// console.log(employee);


// 4. Delete the `department` property.
// delete employee.department;
// console.log(employee);


// 5. Create a method `showDetails()` to display employee information.

// var employee = {

//     empId: 11,
//     empName: "Raj",
//     department: "Management",
//     salary: 40000,

//     showDetails: function()
//     {
//         console.log(`Employee ID: ${this.empId} \nEmployee Name: ${this.empName} \nEmployee Department: ${this.department} \nEmployee Salary: ${this.salary} \n`)
//     }
// };
// console.log(employee);
// employee.showDetails();


// -------------TASK-4  Bank Account--------------





// var account = {
//     accountNumber: 235723453,
//     holderName: "Dhara Bambhaniya",
//     balance: 100000,
// };


// 1. Display account details.
// console.log(account);


// 2. Deposit ₹5000 into the balance.
// account.balance += 5000;
// console.log(account);


// 3. Add a property `accountType`.
// account.accountType = "Savings";
// console.log(account);


// 5. Create a method `checkBalance()` that displays the current balance.
// var account = {
//     accountNumber: 235723453,
//     holderName: "Dhara Bambhaniya",
//     balance: 100000,

//     checkBalance: function () {
//         console.log(` Accont Number: ${this.accountNumber}\n Holder Name: ${this.holderName}\n Client Balance: ${this.balance}\n`)
//     }
// };
// console.log(account);
// account.checkBalance();



// -------------TASK-5  Movie Booking System--------------

// var movie = {

//     movieName: "CockTail",
//     ticketPrice: 1000,
//     availableSeats: 50,
//     theatreName: "Inox Reliance Mall ",

// };


// 1. Display movie details.
// console.log(movie);


// 2. Update the ticket price.
// movie.ticketPrice = 700;
// console.log(movie);



// 3. Add a property `showTime`.
// movie.showTime = "7:00 to 9:30;"
// console.log(movie);



// 4. Delete the `theatreName` property.
// delete movie.theatreName;
// console.log(movie);


// 5. Create a method `movieInfo()` that displays complete movie information.


// var movie = {

//     movieName: "CockTail",
//     ticketPrice: 1000,
//     availableSeats: 50,
//     theatreName: "Inox Reliance Mall ",

//     movieInfo : function () {

//         console.log(`Movie Name: ${this.movieName} \nTicket Price: ${this.ticketPrice} \nAvailable Seats: ${this.availableSeats} \nTheatre Name: ${this.theatreName} \n`)
//     }
// };
// console.log(movie);
// movie.movieInfo();


// 6. Use a `for...in` loop to display all properties. -->

// for (const key in movie) {
//     console.log(key,movie[key]);
//     console.log(key , typeof key);
// }