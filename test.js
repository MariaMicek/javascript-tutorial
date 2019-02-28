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


