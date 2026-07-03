

// for (; ;) {


//     let randomNumber = parseInt(Math.random() * 100) + 1;
//     console.log(randomNumber);


//     let attempts = 0;
//     let MaxAttempts = 10;

//     let iswinner = false;


//     while (attempts < MaxAttempts) {

//         let userGuess = prompt("Enter a number 1 to 100")


//         if (userGuess === null) {

//             alert("Game Cancelled!");
//             break;
//         }

//         userGuess = Number(userGuess);


//         if (isNaN(userGuess)) {
//             alert("Please enter a valid number!");
//             continue;
//         }


//         if (userGuess < 1 || userGuess > 100) {

//             alert("Number must be between 1 to 100");
//             continue;


//         }

//         attempts++;

//         if (userGuess > randomNumber) {
//             alert(" Too High!");
//         }

//         else if (userGuess < randomNumber) {
//             alert(" Too Low!");
//         }


//         else {

//             alert("Congratulations! You Win!");
//             alert(" Total Attempts: " + attempts)

//             iswinner = true;
//             break;
//         }

//     }


//     if (attempts === 10) {

//         alert("Game Over!");
//         alert("Correct Number was: " + randomNumber);

//     }

//     let choice = prompt("Play Again? yes/no");


//     if (choice !== "yes") {
//         alert("Thank you for Playing!");
//         break;
//     }


// }


let playAgain = true;

for (; ;) {

    if (!playAgain) {
        break;
    }

    alert("Welcome To Our Game Programme...");

    let random = parseInt(Math.random() * 100) + 1;

    let Count = 0;
    let maxCount = 10;
    let isWin = false;

    alert("Guess The Number");
    alert("You Have Only 10 Attempts.");

    for (; ;) {

        if (isWin || Count >= maxCount) {
            alert("Game Over!");
            alert("Correct Number Was : " + random);
            break;
        }

        let guess = Number(prompt("Enter Your Guess (1-100) :"));

        if (guess < 1 || guess > 100) {
            alert("Enter Number Between 1 To 100");
            continue;
        }

        Count++;

        if (guess > random) {
            alert("Too High");
            alert("Attempts Left : " + (maxCount - Count));
        }
        else if (guess < random) {
            alert("Too Low");
            alert("Attempts Left : " + (maxCount - Count));
        }
        else {
            isWin = true;
            alert("Congratulations! You Win");
            alert("Total Attempts : " + Count);
        }
    }

    playAgain = prompt("Play Again ? (yes / no)");

    if (playAgain == "yes") {
        playAgain = true;
    }
    else {
        playAgain = false;
        alert("Thank You For Playing!");
    }
}
