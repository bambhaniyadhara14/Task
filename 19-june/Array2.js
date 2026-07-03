//  1. sort() Method:
// Question: You have an array of numbers:

// var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// var sortedNumbers = [...numbers];   // Original array ki copy

// sortedNumbers.sort((a, b) => {
//     return a - b;
// });

// console.log("Original Array :", numbers);
// console.log("Sorted Array :", sortedNumbers);


// 2. every() Method:
// Question: You have an array of numbers:


// var numbers = [2, 4, 6, 8, 10];

// var ans = numbers.every((element) => {
//     return element % 2 == 0;
// });

// console.log(ans);



//3. some() Method
// Question: You have an array of numbers:

// var numbers = [1, 3, 5, 7, 8, 9];

// var ans = numbers.some((element) => {
//     return element % 2 == 0;
// });

// console.log(ans);


// Map,Foreach,filter

// -Create an array of 10 numbers and use forEach() to display each number in the console.
// var arr = [10,20,30,40,50,60,70,80,90,100];

// arr.forEach((element)=>{
//     console.log(element);
// });


// -Create an array of 5 numbers and use map() to create a new array containing the square of each number.


// -Create an array of numbers from 1 to 20 and use filter() to create a new array containing only odd numbers.






// -Create an array of 10 numbers and use filter() to find all numbers greater than 50.






// Create an array of 8 numbers

// var arr = [10, 25, 30, 40, 15, 50, 22, 35];

// map() - Multiply each number by 5
// var output1 = arr.map((element) => {
//     return element * 5;
// });

// console.log("After map :", output1);

// filter() - Keep only numbers greater than 100
// var output2 = output1.filter((element) => {
//     return element > 100;
// });

// console.log("After filter :", output2);

// forEach() - Display the final result
// output2.forEach((element) => {
//     console.log(element);
// });