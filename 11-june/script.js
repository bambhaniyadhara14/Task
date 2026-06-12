
var bill = 0;

while (true) {

    var choice = prompt(
        "1. for Pen\n" +
        "2. for Pencil\n" +
        "3. for Bottle\n" +
        "0. for Exit\n\n" +
        "Enter your choice : "
    );

    switch (choice) {

        case '1':

            var quantity = Number(prompt("Enter Pen Quantity : "));
            console.log("Total quantity of pen = ", quantity);

            if (quantity <= 10) {
                bill += (10 * quantity);
            } else {
                bill += (10 * quantity - (10 * quantity * 0.05));
            }

            console.log("Pen Added");
            break;


        case '2':

            quantity = Number(prompt("Enter Pencil Quantity : "));
            console.log("Total quantity of pencil = ", quantity);


            if (quantity <= 10) {
                bill += (10 * quantity);
            } else {
                bill += (10 * quantity - (10 * quantity * 0.05));
            }

            console.log("Pencil Added");
            break;


        case '3':

            quantity = Number(prompt("Enter Bottle Quantity : "));
            console.log("Total quantity of bottle = ", quantity);


            if (quantity <= 10) {
                bill += (10 * quantity);
            } else {
                bill += (10 * quantity - (10 * quantity * 0.05));
            }

            console.log("Bottle Added");
            break;


        case '0':

            console.log("Exit");
            console.log("Total Bill = " + bill);
            break;


        default:

            console.log("Invalid Choice");
            break;
    }

    if (choice == '0') {
        break;
    }

}