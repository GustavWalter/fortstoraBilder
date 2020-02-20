//Hämta hem arraylist men även plats för vart alla imageBorder ligger
var elementBilder = document.querySelectorAll(".imageBorder");

elementBilder.forEach(function(bild, index) {
    console.log(bild);
    bild.setAttribute("data-toggle", "lightBox" + index);

    var revealBox = document.createElement("div");
    revealBox.innerHTML += "<div class=\"large reveal\" id=\"lightBox" + index + "\" data-reveal><img src=\"bilder/twitterlink.jpg\" alt=\"test\"><button class=\"button success\" data-close aria-label=\"Close reveal\" type=\"button\"><span aria-hidden=\"true\">STÄNG BILDEN</span></button></div>";

    document.body.appendChild(revealBox);
});

