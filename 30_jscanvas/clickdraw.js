//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "rect";

//var toggleMode = function(e) {
var toggleMode = (e) => {
    console.log("toggling...");
    if (mode == "rect") {
        mode = "circ";
    }
    else {
        mode = "rect";
    }
}

var drawRect = function(e) {
    var mouseX = e.offsetX
    var mouseY = e.offsetY
    console.log("mouseclick registered at ", mouseX, mouseY);

    ctx.beginPath();
    ctx.rect(mouseX, mouseY, 50, 50);
    ctx.stroke();
}

var drawCircle = (e) => {
    var mouseX = e.offsetX
    var mouseY = e.offsetY
    console.log("mouseclick registered at ", mouseX, mouseY);

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 25, 0, 2 * Math.PI);
    ctx.stroke();
}

var draw = function(e) {
    if(mode == "rect"){
        //console.log("rec")
        c.addEventListener("click",drawCircle);
        drawRect;
    }
    else{
        //console.log("circ")
        c.addEventListener("click",drawCircle);
        drawCircle;
    }
}

var wipeCanvas = function() {
    ctx.clearRect(0, 0, c.width, c.height);
}

c.addEventListener("click", draw);
var bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener('click', ()=>{
    toggleMode(togglebut);
})
var clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);