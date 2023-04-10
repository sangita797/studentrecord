import $ from 'jquery';
// $(window).scroll(function() {    
//     $('nav').addClass('fixed');
// })

import owlCarousel from 'react-owl-carousel'; 

//   counter js start

function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
      animate(element);
  }
  
  function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html()
      }).animate({
        countNum: maxval
      }, {
        //duration 5 seconds
        duration: 5000,
        easing: 'linear',
        step: function() {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function() {
          element.html(this.countNum + html);
        }
      });
    }
  
  }
  
  //When the document is ready
  $(function() {
    $(window).scroll(function() {
      $("h2[data-max]").each(function() {
        inVisible($(this));
      });
    })
  });
//   counter js end
//   slider js start

$(function() {
    owlCarousel(".owl-slider").owlCarousel({
    loop: !0,
    margin: 20,
    items: 4,
    nav: !1,
    navigation : true,
    stagePadding: 200,
    autoplay: !0,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    slideSpeed: 1500,
    smartSpeed: 1500,
    dots: !0,
    responsiveClass: !0,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            stagePadding: 50
        },
        768: {
            items: 2,
            stagePadding: 50
        },
        992: {
            items: 2,
            stagePadding: 100
        },
        1200: {
            items: 4,
            margin: 20
        }
    }
})
});
//   slider js end
$(function() {
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

});