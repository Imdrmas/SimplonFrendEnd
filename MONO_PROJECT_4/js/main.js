$(document).ready(function(){

  $('#input_container').click(function(){
      $(this).find('i').toggleClass('fa fa-search fa fa-times')
  });
  $('#input_container').focusout(function(){
      $(this).find('i').toggleClass('fa fa-search fa fa-times')
  });

$('#myAskHelpId').click(function(){

  //  $(this).addClass("selected");
    $(this).find('i').toggleClass('fa fa-chevron-up fa fa-chevron-down');

});

/*
$('#myAskHelpId').click(function(){
    $(this).find('i').toggleClass('fa fa-chevron-up fa fa-chevron-down')
});
*/


});
