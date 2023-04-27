var c = document.getElementById("playground");
var dotButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var ctx = c.getContext("2d");

ctx.fillStyle = "cyan";

var requestID;

var clear = (e) => {
    //e.preventDefault();
    ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;

var drawDot = () => {
    window.cancelAnimationFrame(requestID);
    
    clear();

    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    console.log(radius);
    if (radius >= 250) {
        growing = false;
    }
    
    if (radius == 0) {
        growing = true;
    }

    console.log(growing);
    if (growing) {
        radius += 1;
    }
    else {
        radius -= 1;
    }

    requestID = window.requestAnimationFrame(drawDot);
}

var dvdLogoSetup = function() {
    window.cancelAnimationFrame(requestID);

    var rectWidth = 120;
    var rectHeight = 60;

    var rectX = Math.random() * (c.width);
    var rectY = Math.random() * (c.height);

    var randx = Math.floor(Math.random() * 2);
    var randy = Math.floor(Math.random() * 2);
    var vel = [-1, 1];
    //velocity
    var xVel = 1;
    var yVel = 1;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var dvdLogo = function() {
        console.log("rectX: " + rectX + " rectY: " + rectY);
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
        if (rectY < 0 || rectY > c.height - rectHeight) {
            yVel = -yVel;
        }
        if(rectX < 0 || rectX > c.width - rectWidth){
            xVel = -xVel;
        }
        rectX += xVel;
        rectY += yVel;
        requestID = window.requestAnimationFrame(dvdLogo);
    }
    dvdLogo();
}

var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);

    window.cancelAnimationFrame(requestID);
}

dotButton.addEventListener("click", drawDot);
dvdButton.addEventListener("click", dvdLogoSetup);
stopButton.addEventListener("click", stopIt);