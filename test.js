//DATE OBJECT
//obecna data:
var currentDate = new Date();
console.log(currentDate);

//dowolna data
var pastDate = new Date(1410, 0, 13, 23, 50, 34);
var futureDate = new Date(2415, 11, 24, 3, 0, 59);
console.log(pastDate);
console.log(futureDate);

//methods
console.log(pastDate.getMonth());
console.log(pastDate.getFullYear());
console.log(pastDate.getDate());
console.log(pastDate.getDay());
console.log(pastDate.getHours());
console.log(pastDate.getTime()); //milisekundy od 01.01.1970

//porównywanie dat za pomocą .getTime
if (pastDate.getTime() == futureDate.getTime()) {
    console.log("Dates are equal.");
} else {
    console.log("Dates are not equal.");
};

//ile czasu mieneło od moich urodzin?
var now = new Date();
var myBirthday = new Date(1998, 1, 16, 1, 30, 0);

//w latach:
function Difference() {
    var difference = (now.getTime() - myBirthday.getTime())/1000/60/60/24/365.25;
    console.log(difference);
    return difference;
};
var myAge = Difference();
console.log("I was born " + myAge + " years ago.")


//w dniach:
var myAge = (now.getTime() - myBirthday.getTime())/1000/60/60/24;
console.log("I was born " + myAge + " days ago.");


//w milisekundach:
console.log("I was born " + (now.getTime() - myBirthday.getTime()) + " miliseconds ago.");





