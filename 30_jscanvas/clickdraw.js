//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "rect";

var cirbut = document.getElementById("buttonToggle");

cirbut.addEventListener('click', ()=>{
    toggleMode(cirbut);
})

//var toggleMode = function(e) {
var toggleMode = (e) => {
    console.log("toggling...");
    if (e == "rect|circ" || e == "rectangle") {
        mode = "circ";
    }
    else {
        mode = "rect";
    }
}

var drawRect = function(e) {
    var mouseX = MouseEvent.offsetX
    var mouseY = MouseEvent.offsetY
    console.log("mouseclick registered at ", mouseX, mouseY);

    rect(mouseX, mouseY, 500, 300);
}

var drawCircle = (e) => {
    
}