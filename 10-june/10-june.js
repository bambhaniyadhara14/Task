var n1 = Number(prompt("Enter the Value of N1 : "));
var n2 = Number(prompt("Enter the Value of N2 : "));
var n3 = Number(prompt("Enter the Value of N3 : "));
var n4 = Number(prompt("Enter the Value of N4 : "));

document.querySelectorAll('p')[0].innerHTML = "Value of N1 : " + n1;
document.querySelectorAll('p')[1].innerHTML = "Value of N2 : " + n2;
document.querySelectorAll('p')[2].innerHTML = "Value of N3 : " + n3;
document.querySelectorAll('p')[3].innerHTML = "Value of N4 : " + n4;

if (n1 > n2) {

    if (n1 > n3) {

        if (n1 > n4) {
            document.querySelector('h1').innerHTML = "N1 is Greater";
        } else if (n1 == n4) {
            document.querySelector('h1').innerHTML = "N1 and N4 are Equal and Greater";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    } else if (n1 == n3) {

        if (n1 > n4) {
            document.querySelector('h1').innerHTML = "N1 and N3 are Equal and Greater";
        } else if (n1 == n4) {
            document.querySelector('h1').innerHTML = "N1, N3 and N4 are Equal and Greater";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    } else {

        if (n3 > n4) {
            document.querySelector('h1').innerHTML = "N3 is Greater";
        } else if (n3 == n4) {
            document.querySelector('h1').innerHTML = "N3 and N4 are Equal and Greater";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    }

} else if (n1 == n2) {

    if (n1 > n3) {

        if (n1 > n4) {
            document.querySelector('h1').innerHTML = "N1 and N2 are Equal and Greater";
        } else if (n1 == n4) {
            document.querySelector('h1').innerHTML = "N1, N2 and N4 are Equal and Greater";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    } else if (n1 == n3) {

        if (n1 > n4) {
            document.querySelector('h1').innerHTML = "N1, N2 and N3 are Equal";
        } else if (n1 == n4) {
            document.querySelector('h1').innerHTML = "All Are Equal";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    } else {

        if (n3 > n4) {
            document.querySelector('h1').innerHTML = "N3 is Greater";
        } else if (n3 == n4) {
            document.querySelector('h1').innerHTML = "N3 and N4 are Equal and Greater";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    }

} else {

    if (n2 > n3) {

        if (n2 > n4) {
            document.querySelector('h1').innerHTML = "N2 is Greater";
        } else if (n2 == n4) {
            document.querySelector('h1').innerHTML = "N2 and N4 are Equal and Greater";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    } else if (n2 == n3) {

        if (n2 > n4) {
            document.querySelector('h1').innerHTML = "N2 and N3 are Equal and Greater";
        } else if (n2 == n4) {
            document.querySelector('h1').innerHTML = "N2, N3 and N4 are Equal and Greater";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    } else {

        if (n3 > n4) {
            document.querySelector('h1').innerHTML = "N3 is Greater";
        } else if (n3 == n4) {
            document.querySelector('h1').innerHTML = "N3 and N4 are Equal and Greater";
        } else {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }

    }

}