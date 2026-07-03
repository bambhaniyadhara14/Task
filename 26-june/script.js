document.querySelector('button').onclick = function (){
     console.log("Hello1");
}


document.querySelector('button').onclick =  ()=>{
    console.log("Hello");
}



function greeting(){
    console.log("Welcome to JS.");
    console.log("Here");
}






document.querySelector('button').onclick = greeting;


document.querySelector('.check').onclick = function (){
    // How to Access Class List
    console.log(document.querySelector('h1').classList);
}


document.querySelector('.add').onclick = function (){
    // How to Add new Class in a Class List
    document.querySelector('h1').classList.add('show');
    console.log(document.querySelector('h1').classList);
}

document.querySelector('.remove').onclick = function (){
    // How to remove Class in a Class List
    document.querySelector('h1').classList.remove('show');
    console.log(document.querySelector('h1').classList);
}


document.querySelector('.btn').onclick = function (){
    // How to Add/remove Class in a Class List
    document.querySelector('h1').classList.toggle('show');
    console.log(document.querySelector('h1').classList);
}