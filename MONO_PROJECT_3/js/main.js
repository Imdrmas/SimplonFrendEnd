$(document).ready(function () {

  $(".icon-toggle-changed").hover(function() {
    $(this).find($(".fas")).removeClass('fa-plus').addClass('fa-minus');

}, function() {
  $(this).find($(".fas")).removeClass('fa-minus').addClass('fa-plus');

});


var i = 0;
var timer = setInterval(function() {
  console.log(++i);
  if (i === 324) clearInterval(timer);
  document.getElementById("hours-of-meeting").innerHTML = i;
  console.log('post-interval'); //this will still run after clearing
}, 1);

var x = 0;
var timerx = setInterval(function() {
  console.log(++x);
  if (x === 89) clearInterval(timerx);
  document.getElementById("project-done").innerHTML = x;
  console.log('post-interval'); //this will still run after clearing
}, 10);

var z = 0;
var timerz = setInterval(function() {
  console.log(++z);
  if (z === 97) clearInterval(timerz);
  document.getElementById("slices-of-pizza").innerHTML = z;
  console.log('post-interval'); //this will still run after clearing
}, 10);

var y = 0;
var timery = setInterval(function() {
  console.log(++y);
  if (y === 500) clearInterval(timery);
  document.getElementById("happy-client").innerHTML = y;
  console.log('post-interval'); //this will still run after clearing
}, 1);



// declare variable
var scrollTop = $(".scrollTop");

$(window).scroll(function() {
  // declare variable
  var topPos = $(this).scrollTop();

  // if user scrolls down - show scroll to top button
  if (topPos > 200) {
    $(scrollTop).css("opacity", "1");

  } else {
    $(scrollTop).css("opacity", "0");
  }

}); // scroll END

//Click event to scroll to top
$(scrollTop).click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;

}); // click() scroll top EMD


}); //End
