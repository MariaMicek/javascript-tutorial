//DOM
var myContainer = document.getElementsByClassName("container");
var myH2 = myContainer[0].getElementsByTagName("h2");

//innerHTML
var myBody = document.getElementsByTagName("body");
console.log(myBody[0].innerHTML);
myH2[0].innerHTML = "<h6> Bye Bye </h6>";

//textContent
var myParagraph = document.getElementById("paragraph");
console.log(myParagraph.textContent);
myParagraph.textContent = "I am a sad paragraph...";

//changing element attribute
var link = document.getElementById("link");
console.log(link.getAttribute("id"));
console.log(link.getAttribute("target"));
console.log(link.setAttribute("class","blog"));
console.log(link.className);
console.log(link.className = "best-blog")

//style attribute
link.setAttribute("style", "fontSize:20px ; color:red");
link.style.backgroundColor = "yellow";
link.style.textDecoration = "none";

//adding new elements
var newLi = document.createElement("li");       //child element
var menu = document.getElementById("nav").getElementsByTagName("ul")[0];    //parent element

menu.appendChild(newLi);
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);


var newA = document.createElement("a");     //child element
newLi.appendChild(newA);
newA.innerHTML = "contact me";
newA.setAttribute("href", "#");

//removing elements 
var parent = document.getElementById("nav").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[1];
var removed = parent.removeChild(child);
parent.appendChild(removed);
