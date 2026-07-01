// Recursion Function 
// 1. Write a recursive function to generate Armstrong Number series up to n terms.





// var n = 10; // Armstrong numbers print karne hain

// function isArmstrong(num) {

//     var temp = num;
//     var digit = num.toString().length;
//     var sum = 0;

//     while (temp > 0) {

//         var rem = temp % 10;
//         sum = sum + (rem ** digit);
//         temp = Math.floor(temp / 10);

//     }

//     return sum == num;
// }

// function Armstrong(count, number) {

//     if (count == 0)
//         return;

//     if (isArmstrong(number)) {

//         console.log(number);
//         count--;

//     }

//     Armstrong(count, number + 1);

// }

// Armstrong(n, 0);



// Arrow Function
// 1. Create a tax calculator with slab logic via functions.

// let taxCalculator = (income) => {

//     if (income <= 250000) {
//         return 0;
//     }

//     else if (income <= 500000) {
//         return income * 0.05;
//     }

//     else if (income <= 1000000) {
//         return income * 0.20;
//     }

//     else {
//         return income * 0.30;
//     }

// }

// console.log("Tax =", taxCalculator(200000));
// console.log("Tax =", taxCalculator(400000));
// console.log("Tax =", taxCalculator(700000));
// console.log("Tax =", taxCalculator(1500000));





// //Expression Function 



// 1. Build a modular billing system using functions.




// let billing = function (price, quantity) {

//     let total = price * quantity;
//     let gst = total * 0.18;
//     let finalBill = total + gst;

//     console.log("Total Amount :", total);
//     console.log("GST (18%) :", gst);
//     console.log("Final Bill :", finalBill);

// }

// billing(500, 4);



// 2. Check if a number is Perfect using function.



// let perfectNumber = function (num) {

//     let sum = 0;

//     for (let i = 1; i < num; i++) {

//         if (num % i == 0) {
//             sum += i;
//         }

//     }

//     if (sum == num) {
//         return "Perfect Number";
//     }
//     else {
//         return "Not Perfect Number";
//     }

// }

// console.log(perfectNumber(28));
// console.log(perfectNumber(15));



// IIFE Function
// 1. Write a function to validate a 6-digit OTP.

// (function (otp) {

//     if (otp.length == 6 && !isNaN(otp)) {
//         console.log("Valid OTP");
//     }
//     else {
//         console.log("Invalid OTP");
//     }

// })("123456");