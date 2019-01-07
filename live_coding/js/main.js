var a = "Welcome to my site";
function clickme() {
  return confirm(a);
}

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("times").innerHTML = t;
}

var y = 0;
function functionName() {
   var timery = setInterval(function() {
    console.log(++y);
    //if (y === 500) clearInterval(timery);
    document.getElementById("myID").innerHTML = y;
    console.log('post-interval'); //this will still run after clearing
  }, 50);
}
