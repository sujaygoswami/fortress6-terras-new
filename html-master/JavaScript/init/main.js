jQuery(document).ready(function(){









function isAppleDevice(){
return (
(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
);
}
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
var appStoreURL = "";
if(isAndroid > -1){
jQuery('body').addClass('android-device');
jQuery('html').addClass('android-device');
}
else if( isAppleDevice() ){
jQuery('body').addClass('ios-device');
jQuery('html').addClass('ios-device');

  // jQuery( window ).on( "orientationchange", function( event ) {
  //   location.reload();
  // });


}





//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();


// scroll up done
$(function(){
  var lastScrollTop = 0, delta = 5;
  $(window).scroll(function(){
    var nowScrollTop = $(this).scrollTop();
    if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
      if (nowScrollTop > lastScrollTop){
        
      } else {
        jQuery('header.header').addClass('scroll-up-visible');
     }
    lastScrollTop = nowScrollTop;
    }
  });
});
// jQuery(window).scroll(function () {
//   if (jQuery(document).scrollTop() == 0) {
//     jQuery('header.header').removeClass('scroll-up-visible');
//   }
// });









// object notation
var site = {}



site.FIRSTLOOK = function() {

    


    


};






jQuery(window).resize(function(){


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});





// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('>img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});










jQuery('.touch .has-submenu > a').addClass('dual-click');
   
   jQuery(document).on( "click", ".dual-click", function(event) {
        
        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
 jQuery('.go-top').click(function(){
   jQuery('html, body').animate({scrollTop: 0}, 400);
  
});



// banner mini slider
jQuery('.banner-mini-slider-module .the-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});

// cover-bg-content-module
jQuery('.cover-bg-content-module').each(function(){
  var CONTEXTHEIGHT = jQuery(this).find('.the-context > .main-wrap').height();
  jQuery(this).css('min-height', CONTEXTHEIGHT);
});

// fancy box
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// team-member-video-teaser-snippet
jQuery('.team-member-video-teaser-snippet').each(function(){
 var HEIGHT = jQuery(this).height();
 jQuery(this).css('margin-bottom', - (HEIGHT / 2));
 jQuery(this).parents('.section-row').css('padding-bottom', (HEIGHT / 2));
});


// global carousel
jQuery('.global-carousel:not(.counter-hidden)').each(function(){


  var $globalCarousel = jQuery(this);
  
  
  if ($globalCarousel.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      if(slidesCount >= 10){
        $(sliderCounter).html('<span>'+'<i>'+'0'+'</i>'+'<i class="double-value">'+currentSlide+'</i>'+'</span>'+ '<span>'+'/'+'</span>' +'<span>'+slidesCount+'</span>');
      }else{
        $(sliderCounter).html('<span>'+'0'+currentSlide+'</span>'+ '<span>'+'/'+'</span>' +'<span>'+'0'+slidesCount+'</span>');
      }
      
    };
  
    $globalCarousel.on('init', function(event, slick) {
      $globalCarousel.append(sliderCounter);
      updateSliderCounter(slick);
    });
  
    $globalCarousel.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
  }
  
  });
  
  jQuery('.global-carousel-type-1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  jQuery('.global-carousel-type-2').slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    draggable: false
  });
  jQuery('.global-carousel-type-3').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  
  jQuery('.type-arrow-pagination-view-1').each(function(){
    jQuery(this).find('.slick-arrow').wrapAll('<div class="slider-arrow-holder"></div>');
    jQuery(this).find('.slider__counter, .slider-arrow-holder').wrapAll('<div class="global-carousel-slider-navigate-wrap"></div>');
    var PREVBUTTON = jQuery(this).find('.slick-prev');
    jQuery(this).find('.slider__counter').detach().insertAfter(PREVBUTTON);
  });
  jQuery('.global-carousel-slider-navigate-wrap').each(function(){
    var SLICKLIST = jQuery(this).parent().find('.slick-list');
    jQuery(this).detach().insertAfter(SLICKLIST);
  });

  jQuery('.global-carousel').each(function(){
    jQuery(this).on('afterChange', function(event, slick, currentSlide, nextSlide){
      var DOUBLEVALUE = jQuery(this).find('.double-value').html();
      var iNum = parseInt(DOUBLEVALUE);
      if(iNum >= 10){
        jQuery(this).find('.double-value').prev('i').hide();
      }
        console.log(iNum);
    });
  });

  // interactive-map-module
  jQuery('.interactive-map-module').each(function(){
    var PARENT = jQuery(this);
    var MINHEIGHT = jQuery(this).find('.the-main-map').height();
    jQuery(this).css('min-height', MINHEIGHT);

    jQuery(this).find('.pointer .trigger').click(function(){
      jQuery(PARENT).find('.pointer .trigger').not(this).removeClass('active');
      jQuery(PARENT).find('.pointer .trigger').not(this).parent().removeClass('current');
      jQuery(this).toggleClass('active');
      jQuery(this).parent().toggleClass('current');
    });

  });

  // header-menu-trigger
  jQuery('.header-menu-trigger').click(function(){
    jQuery('.main-menu-expanded').addClass('fadeInDown');
    jQuery('.main-menu-expanded').removeClass('fadeOutUp');
    jQuery('.main-menu-expanded').show();
  });
  jQuery('.menu-close').click(function(){
    jQuery('.main-menu-expanded').removeClass('fadeInDown');
    jQuery('.main-menu-expanded').addClass('fadeOutUp');
  });

  
  
 


});








// load
jQuery(window).load(function(){




// match height
  jQuery('.equal-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.element-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.iconic-text-widget-module .module-header').matchHeight();







var siteLoad = {}




siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

};   




jQuery(window).resize(function(){


});


// traingle-watermark-has
jQuery('.traingle-watermark-has').each(function(){
  var HEIGHT = jQuery(this).height();
  var WIDTH = jQuery(this).width();
  var CLONEMASKHEIGHT = jQuery(this).find('.the-mask-img img').height();
  var CLONEMASKWIDTH = jQuery(this).find('.the-mask-img img').width();
  jQuery(this).find('.mask-it').css('-webkit-mask-position-y', HEIGHT - CLONEMASKHEIGHT);
  jQuery(this).find('.mask-it').css('-webkit-mask-position-x', WIDTH - CLONEMASKWIDTH);
});


});
