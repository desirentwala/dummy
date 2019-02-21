//********************
//Load Function
//********************
$(window).on("load",function(){
    $(".contentScroll").mCustomScrollbar();

    //Pre Loader
    $('#awz-preloader').delay(350).fadeOut(function(){
	  	$('body').delay(350).css({'overflow':'visible'});
   	});
});


//********************
//Ready Function
//********************
$(document).ready(function(){

  //********************
  // Search Function
  //********************
  $('.control').click( function(){
    $('body').addClass('search-active');
    $('.input-search').focus();
  });

  $('.icon-close').click( function(){
    $('body').removeClass('search-active');
  });


});
