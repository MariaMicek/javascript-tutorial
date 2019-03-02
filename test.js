//grabbing elements with DOM
var myPara = document.getElementById("content").getElementsByTagName("p")[5];

//grabbing elements with jQuery
var myParagraph = $("#content p:last-child");

//methods in jQuery
myParagraph.addClass("test");
myParagraph.removeClass("test");
myParagraph.fadeOut();
myParagraph.fadeIn();
myParagraph.css({color:"red", fontSize:"24px"});
myParagraph.animate({bottom:"100px"});