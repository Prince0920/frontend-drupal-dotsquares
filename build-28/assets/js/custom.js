// Mobile menu toggle

$('.menu-toggle').on('click', function(){
    $(this).toggleClass('toggle-open');   
    $(".mega-menu").toggleClass('mobile-menu');
});



// Mobile menu dropdown

$(document).ready(function(){
    $(".mega-indicator").click(function(){
      $(".mega-sub-menu").toggleClass("show");
    });
  });

// sticky header 

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header').addClass("header-shrink");
      }
      else{
        $('.header').removeClass("header-shrink");
      }
    });



// Google Map



// google.maps.event.addDomListener(window, 'load', initialize);


