/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.
    		
    		Write with your future self or teammates in mind.
    		
    		If you find yourself falling out of flow mode, consult 
    		other teams
    		MDN

   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/

// Team Phantom Tollbooth :: Clyde Sinclair, Fierce Dragon 
// SoftDev pd0
// K28 -- Getting more comfortable with the dev console and the DOM
// 2023-04-05w
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy', //typing o in console displays the dictionary
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) { //adds an item to list
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) { //removes an item from list
  var listitems = document.getElementsByTagName('li');
  console.log(listitems)
  listitems[n].remove();
};


var red = function() { //makes 1st index and all items after and including index 8 red
  var items = document.getElementsByTagName("li"); 
  console.log(items);
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red'); //red is added as a class to all items but only take effect if the classlist was previously empty
  }
  console.log(items);
};


var stripe = function() { //makes 1st index red and makes all items after and including index 8 alternate between red and blue
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
  console.log(items);
};

//insert your implementations here for...
// FIB
// FAC
// GCD

var fac = function(n){
  if (n < 2) {
      return 1;
  }
  else {
      return n * fib(n-1);
  }
}

var fib = function(n){
  if(n == 0){
      return 0;
  } else if (n == 1){
      return 1;
  } else{
      return fib(n-1) + fib(n-2);
  }
}

var gcd = function(a, b){
  if (a == 0 || b == 0) {
    return 0;
  }
  var counter = 1;
  var g = 1;
  if (a > b) {
    while (counter <= b) {
      if (a % counter == 0 && b % counter == 0) {
        g = counter;
      }
      counter += 1;
    }
  }
  else {
    while (counter <= a) {
      if (a % counter == 0 && b % counter == 0) {
        g = counter;
      }
      counter += 1;
    }
  }
  return g;
}

var a = gcd(50, 90);
var start = "gcd of 50 and 90 is " + a;
console.log(start);

var x = 0;

var fibbut = document.getElementById("fib");
var facbut = document.getElementById("fac");
var gcdbut = document.getElementById("gcd");

fibbut.addEventListener('click', ()=>{
  addItem("fib(5): " + fib(5));
});

facbut.addEventListener('click', ()=>{
  addItem("fac(5): " + fac(5));
})
gcdbut.addEventListener('click', ()=>{
  addItem("gcd(50,90): " + gcd(50, 90));
})


// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  return retVal;
};


