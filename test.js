var colorChanger = document.getElementById("color-changer");
var colors = ["red","pink","green","blue","yellow"];
var counter = 0;

function changeColors() {

    if (counter >= colors.length) {
        counter = 0;
    }

    colorChanger.style.background = colors[counter];
    counter++;
};

var myTimer = setInterval(changeColors,3000);

colorChanger.onclick = function () {

    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer stopper";
};