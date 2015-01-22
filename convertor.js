var x = 0;
var y = 0;


// the European way!

// computes and returns the value of x in quarts
function cupsToQuarts() {
   y = (x * 0.25);
  alert(x + " cups is " + y + " quarts");
}


// computes and returns the value of x in yards
function yardsToMeters() {
  y = (x * 1.09361);
  alert(x + " yards is " + y + " meters");
}


// computes and returns the value of x in celsius
function fahrenheitToCelsius() {
  y = (x - 32 ) * (5/9);
  alert(x + " degrees fahrenheit is " + y + " degrees celsius");
}


//'merica conversions'

// computes and returns the value of x in cups
function quartsToCups() {
  y = (x * 4);
  alert(x + " quarts is " + y + " cups");
}

// computes and returns the value of x in yards
function metersToYards() {
  y = (x * 1.09361);
  alert(x + " meters is " + y + " yards");
}

// computes and returns the value of x in fahrenheit
//°C  x  9/5 + 32 = °F
function celsiusToFahrenheit() {
  y = (x * 9/5) + 32;
  alert(x + " degrees celsius is " + y + " degrees fahrenheit");
}

// setX takes a string as a parameter, casts it
// to a number, and stores that value in x
function setX(xString) {
  x = Number(xString);
}
