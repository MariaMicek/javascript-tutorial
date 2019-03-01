//OBJECTS
//tworzenie obiektu zdefiniowanego przez js
var myString = new String ();
myString = "hello";
console.log(myString);

var myString2 = "hello2";
console.log(myString2);

console.log(myString2.length);       //property
console.log(myString2.toUpperCase());      //method


//tworzenie obiektu od podstaw
var myCar = new Object();

myCar.maxSpeed = 50;        //properties
myCar.driver = "Mike";

myCar.drive = function() {          //method
    console.log("now driving");
};

console.log(myCar);
console.log(myCar.maxSpeed);
console.log(myCar.driver);
myCar.drive();

//skrócona wersja 
var myCar2 = {
    maxSpeed: 70,
    driver: "John",
    drive: function(speed, time){
        console.log("How many miles? ");
        console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed, myCar2.driver);
myCar2.drive(50, 3);
