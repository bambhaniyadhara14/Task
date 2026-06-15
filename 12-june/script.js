

for (; ;) {


    alert(" Welcome To Our Programme ");

    let randomNumber = parseInt(Math.random() * 100) + 1;

    console.log(randomNumber);

    let attempts = 0;
    let maxAttempts = 10;
    let isWinner = false;


    while (attempts < maxAttempts) {

        let userGuess = prompt("Enter a number between 1 to 100");

        if (userGuess === null) {

            alert("Game Cancelled!");
            break;
        }

        userGuess = Number(userGuess);


        if (isNaN(userGuess)) {
            alert(" Please enter a valid number!");
            continue;
        }

        if (userGuess < 1 || userGuess > 100) {
            alert(" Number must be between 1 and 100");
            continue;
        }


        attempts++;


        if (userGuess > randomNumber) {
            alert(" Too High!");
        }

        else if (userGuess < randomNumber) {
            alert(" Too Low!");
        }

        else {
            alert(" Congratulations! You Win!");
            alert(" Total Attempts: " + attempts);

            isWinner = true;
            break;
        }
    }


    if ( attempts === maxAttempts) {
        alert("Game Over!");
        alert("Correct Number was: " + randomNumber);
    }

    let choice = prompt("Play Again? yes/no");

    if (choice !== "yes") {
        alert("Thank You for Playing!");
        break;
    }
}
