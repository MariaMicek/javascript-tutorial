//constructor function
var Car = function(maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log("How many miles? ");
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("The name of the driver is " + this.driver);
    };
};

//objects based on constructor function
var Car1 = new Car(35, "Basia");
var Car2 = new Car(70, "Marysia");
var Car3 = new Car(60, "Kasia");

//calling some of the properties and functions from objects
Car1.drive(30, 1.5);
Car2.logDriver();
console.log(Car3.maxSpeed, Car3.driver);