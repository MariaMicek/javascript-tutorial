//Wyświetla liczby od 0 do 9
for (i = 0; i <10; i++) {

    console.log(i);
    
}
console.log(".");


//Przerywa po 7
for (i = 0; i <10; i++) {

    console.log(i);
    
    if (i === 7) {
        break;
    }
}

console.log("I have broken out of the loop");
console.log(".");


//Omija 3 i 5
for (i = 0; i <10; i++) {

    if (i === 3 || i === 5) {
        continue;
    }

    console.log(i);
    
}
console.log(".");


//Połączenie break i continue
for (i = 0; i <10; i++) {

    if (i === 3 || i === 5) {
        continue;
    }

    console.log(i);
    
    if (i === 7) {
        break;
    }
}

console.log("I have broken out of the loop");