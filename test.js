var youLikeMeat = false;
if (youLikeMeat) {
    document.write("Here is your meaty menu...  ");
} else { (youLikeMeat)
    document.write("Here is your vegan menu...  ");
}

if (7>5) {
    document.write("This is true.  ");
}

var myNumber = 10;
if (myNumber < 8) {
    document.write("My number is smaller than 8.  ");
} else { (myNumber > 8)
    document.write("My number is greater than 8.  ");
}

var myAge = 25;
if (myAge > 30) {
    document.write("You are over 30.  ");
}
else if (myAge > 20) {
    document.write("You are over 20.  ");
}
else if (myAge > 10) {
    document.write("You are over 10.  ");
}
else {
    document.write("You are not over 10.  ");
}

if (myAge >= 18 && myAge <= 30) {
    document.write("You can come!  ");
} else {
    document.write("You can't come...  ");
}

if (myAge < 18 || myAge > 30) {
    document.write("I said: You can't come...  ");
} else {
    document.write("I said: You can come!  ");
}