
// using Access Element Content
console.log("Before Modification:")

console.log(document.querySelector('#heading').innerHTML);

console.log(document.querySelector('#paragraph').innerText);

console.log(document.querySelector('#content').textContent);



//using  Modify Element Content :
console.log("After Modification:")



console.log(document.querySelector('#heading').innerHTML = "Welcome to JavaScript DOM");
console.log(document.querySelector('#paragraph').innerHTML = "Learning Content Modification in JavaScript");
console.log(document.querySelector('#content').innerHTML = "Frontend Development with JavaScript");
