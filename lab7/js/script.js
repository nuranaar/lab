


var line = document.querySelector(".line");
var btn = document.querySelector(".btn");
var menu = document.querySelector(".menu");
var list = document.querySelector(".menu ul");
function rotateLine() {

    if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        menu.classList.remove("vjuxMenu");
        menu.classList.add("vjuxMenuQeri");
        btn.classList.add("deactive");
        setTimeout(function () {
            line.style.visibility = ("visible")
        }, 450);
        setTimeout(function(){
            list.style.visibility = ("hidden")
        }, 200);
    }
    else {
        btn.classList.remove("deactive");
        setTimeout(function () {
            line.style.visibility = ("hidden")
        }, 450);
        btn.classList.add("active");
        menu.classList.remove("vjuxMenuQeri");
        menu.classList.add("vjuxMenu");
        setTimeout(function(){
            list.style.visibility = ("visible")
        }, 400);
    }


}

