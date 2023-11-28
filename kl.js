const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
search.classList.toggle('active')
input.focus()
})
function show_hide() {
    var click = document.getElementById("list-items");
    if(click.style.display ==="none") {
       click.style.display ="block";
    } else {
       click.style.display ="none";
    } 
 }
 function hide() {
    var click = document.getElementById("list-items");
    if(click.style.display ==="none") {
       click.style.display ="block";
    } else {
       click.style.display ="none";
    } 
 }
 

function hid() {
   var click = document.getElementById("search");
   if(click.style.display ==="none") {
      click.style.display ="block";
   } else {
      click.style.display ="none";
   } 
}

/*-------------------------------------------------------*/


$(document).ready(function(){
// invoke the carousel
    $('#myCarousel').carousel({
      interval:6000
    });

// scroll slides on mouse scroll 
$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
      
      
        }
        else{
            $(this).carousel('next');
      
        }
    });

//scroll slides on swipe for touch enabled devices  
  $("#myCarousel").on("touchstart", function(event){
 
        var yClick = event.originalEvent.touches[0].pageY;
      $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});
    
});
//animated  carousel start
$(document).ready(function(){

//to add  start animation on load for first slide 
$(function(){
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass(animationName);
        });
      }
    });
       $('.item1.active img').animateCss('slideInDown');
       $('.item1.active h2').animateCss('zoomIn');
       $('.item1.active p').animateCss('fadeIn');
       
});
  
//to start animation on  mousescroll , click and swipe 
  $("#myCarousel").on('slide.bs.carousel', function () {
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass(animationName);
        });
      }
    });
  
// add animation type  from animate.css on the element which you want to animate

    $('.item1 img').animateCss('slideInDown');
    $('.item1 h2').animateCss('zoomIn');
    $('.item1 p').animateCss('fadeIn');
    
    $('.item2 img').animateCss('zoomIn');
    $('.item2 h2').animateCss('swing');
    $('.item2 p').animateCss('fadeIn');
    
    $('.item3 img').animateCss('fadeInLeft');
    $('.item3 h2').animateCss('fadeInDown');
    $('.item3 p').animateCss('fadeIn');
    });
});

function showface_hide() {
  var click = document.getElementById("toface");
 
     click.style.display ="none";
  
}
function showface_hide2() {
  var b = document.getElementById("toface2");
     b.style.display ="flex";

     var n = document.getElementById("toface21");
 n.style.display="none"
    
     
  
}