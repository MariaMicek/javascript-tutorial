console.log(document.forms.myForm);
var myForm = document.forms.myForm;

console.log(myForm.name);
console.log(myForm.hobbies);
console.log(myForm.color);

console.log(myForm.name.value);
console.log(myForm.hobbies.value);
console.log(myForm.color.value);

//onfocus event
myForm.name.onfocus = function() {
    myForm.name.style.border = "4px solid pink";
};

//onblur event
myForm.name.onblur = function() {
    myForm.name.style.border = "none";
};

//onsubmit event
var message = document.getElementById("message");
myForm.onsubmit = function() {
    if (myForm.name.value == "") {
        message.innerHTML = "please enter your name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    };
};

