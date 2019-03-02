var title = document.getElementsByTagName("h1")[0];


title.onclick = function () {
    alert("you clicked me");
};

title.onmouseover = function () {
    this.setAttribute("style", "color:red;");
};

title.onmouseout = function () {
    this.setAttribute("style", "color:black;");
}