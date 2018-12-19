$(document).ready(function() {


  $('.pill-nav a').click(function () {
  $(this).addClass('active').parent().siblings().find('a').removeClass('active');
// $(this).addClass('active');
//  $(this).removeClass('active');

});

var scrollToTop = $('.scroll-to-top');
 if ($(window).scrollTop() >= 1000){
   if (scrollToTop.is(':hidden')){
      scrollToTop.fadeIn(400);
   }
 } else {
   scrollToTop.fadeOut(400);
 }
});

$('.scroll-to-top').click(function(event){
event.preventDefault();
$('html, body').animate({
  scrollTop: 0
}, 1000)
$(this)
});

    var scrollToTop = $('.scroll-to-top');
 if ($(window).scrollTop() >= 1000){
   if (scrollToTop.is(':hidden')){
      scrollToTop.fadeIn(400);
   }
 } else {
   scrollToTop.fadeOut(400);
 }
});

});
