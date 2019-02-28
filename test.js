function myNumber() {
    console.log("My favourite number is:");
}
myNumber();


function getAverage(a,b) {
    var average = (a + b) / 2;
    console.log(average);
}
getAverage(14,18);

//Przypisanie wyniku funkcji do nowej zmiennej
function getAverage2(a,b,c,d,e) {
    var average2 = (a + b + c + d + e) / 5;
    console.log(average2);
    return average2;
}

var myResult = getAverage2(3,16,2,8,65);
console.log("The average is " + myResult);


//Not a number
console.log(isNaN(2));

var a = 12;
var b = "banana";

if (isNaN(b)) {
    console.log("This aint a number...");
} else {
    console.log("Your lucky number is" + (a * b));
}

var aa = 12;
var bb = 3;

if (isNaN(bb)) {
    console.log("This aint a number...");
} else {
    console.log("Your lucky number is " + (aa * bb));
}

