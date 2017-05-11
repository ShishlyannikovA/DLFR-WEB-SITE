$(document).ready(function(){
});
$(function() {
const widthDef = $('p').width();
const heightDef = $('p').height();
    $('p').hover(function(){
          if
      ($(this).height() === heightDef && $(this).width() === widthDef
      ){
      $(this).stop(true).fadeTo("slow",1);
      $(this).stop(true,true).animate({height: $(this).height()*2,width: $(this).width()*2},100);}
          else
      $(this).stop(true).fadeTo("slow",1);
          },function(){
      $(this).stop(true).fadeTo("slow",0.5);
      $(this).stop(true,true).animate({height: heightDef,width: widthDef},100);
});
});
