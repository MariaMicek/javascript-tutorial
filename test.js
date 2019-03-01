console.log(this);

var myCar1 = {
    maxSpeed: 70,
    driver: "John",
    drive: function(speed, time){
        console.log("How many miles? ");
        console.log(speed * time);
    },
    test: function () {
        console.log(this);
    },
    logDriver: function () {
        console.log("The name of the driver is " + this.driver);
    },
};

myCar1.test();
myCar1.drive(70, 2.5);
myCar1.logDriver();



var myCar2 = {
    maxSpeed: 50,
    driver: "Mike",
    drive: function(speed, time){
        console.log("How many miles? ");
        console.log(speed * time);
    },
    test: function () {
        console.log(this);
    },
    logDriver: function () {
        console.log("The name of the driver is " + this.driver);
    },
};

myCar2.test();
myCar2.drive(50, 3);
myCar2.logDriver();

