// break point vars
var $xl = 1200;
var $lowResDesktopEnds = 1366;
var $lgDesktopEnds = 1600;
// break point vars

// setCookie
function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
$(window).load(function(){
setCookie('mobileView','0',7);
if ($(window).width() < 768) {
  setCookie('mobileView','1',7);
}
});






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



// paralax
jQuery('.paralaxed-item-type-2').each(function(){
  if ($(window).width() >= $lgDesktopEnds) {
    jQuery(this).parallaxed({
      speed: 0.5,
    });
  }else if ($(window).width() >= $xl) {
    jQuery(this).parallaxed({
      speed: 0.1,
    });
  }
});
jQuery('.paralaxed-item-type-1').each(function(){
 if ($(window).width() >= $xl) {
    jQuery(this).parallaxed({
      speed: 1,
    });
  }
});




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


// global vars
var HEADERHEIGHT = jQuery('header.header').height();









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



// fancy box
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// team-member-video-teaser-snippet
jQuery('.team-member-video-teaser-snippet').each(function(){

  if ($(window).width() >= $xl) {
    var cols = jQuery(this).find('> .my-col');
    for(var i = 0; i < cols.length; i+=4) {
      cols.slice(i, i+4).wrapAll('<div class="row my-row default-row jc-right"></div>');
    }
  }
  if ($(window).width() < $xl) {
    jQuery(this).find('> .my-col').wrapAll('<div class="row my-row default-row jc-right"></div>');
  }
  

 var HEIGHT = jQuery(this).height();
 jQuery(this).css('margin-bottom', - (HEIGHT - 280));
 jQuery(this).parents('.section-row').css('padding-bottom', (HEIGHT - 280));
 if ($(window).width() < $xl) {
  jQuery(this).css('margin-bottom', - (HEIGHT - 200));
 jQuery(this).parents('.section-row').css('padding-bottom', (HEIGHT - 200));
 }
});


// global carousel
jQuery('.global-carousel').each(function(){
});
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
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
  
  jQuery('.global-carousel-type-2').slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    draggable: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          slidesToShow: 4,
          centerMode: true,
          centerPadding: '90px',
          draggable: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 4,
          centerMode: true,
          centerPadding: '50px',
          draggable: true,
        }
      }
    ]
  });
  jQuery('.global-carousel-type-3').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    centerMode: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          
          slidesToShow: 1
        }
      }
    ]
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

      jQuery(this).parents('.interactive-map-module.slider-functionality').find('.slick-dots li').each(function(){
        if (jQuery(this).hasClass('slick-active')) {
          jQuery(this).find('.trigger').addClass('active');
        }else{
          jQuery(this).find('.trigger').removeClass('active');
        }
      });  
        
    });

   

    
  });

  // interactive-map-module
  
  jQuery('.interactive-map-module').each(function(){
    var PARENT = jQuery(this);
    var MINHEIGHT = jQuery(this).find('.the-main-map').height();
    var VIEW1 = jQuery(this).parent().find('.interactive-map-module.view-1');
    jQuery(this).css('min-height', MINHEIGHT);

    jQuery(this).find('.pointer .trigger').click(function(){
      jQuery(PARENT).find('.pointer .trigger').not(this).removeClass('active');
      jQuery(PARENT).find('.pointer .trigger').not(this).parent().removeClass('current');
      jQuery(this).toggleClass('active');
      jQuery(this).parent().toggleClass('current');
    });


    
      jQuery(VIEW1).find('> .global-card-content').css('min-height', MINHEIGHT - 160);
  

    

  });



  jQuery(this).find('.interactive-map-module.slider-functionality .pointer').each(function(){
    var TOPARENTS = jQuery(this).parents('.interactive-map-module.slider-functionality');
    var SLICKDOTSUL = jQuery(TOPARENTS).find('.slick-dots');
    var SLICKDOTSLI = jQuery(TOPARENTS).find('.slick-dots li');
    var MAPHOLDER = jQuery(TOPARENTS).find('.map-holder');
    

    var POINTERINDEX = jQuery(this).index();
    jQuery(this).attr('pointer-index', POINTERINDEX + 1);
    var RESULTEDINDEX = jQuery(this).attr('pointer-index');
    jQuery(this).addClass('pointer-index' + RESULTEDINDEX);
    jQuery(this).attr('data-pointer-index', 'pointer-index' + RESULTEDINDEX);

    jQuery(this).parents(TOPARENTS).find('.slick-dots li').each(function(){
      var SLICKDOTINDEX = jQuery(this).index();
      jQuery(this).attr('pointer-index', SLICKDOTINDEX + 1);
      var RESULTEDINDEX = jQuery(this).attr('pointer-index');
      jQuery(this).addClass('pointer-index' + RESULTEDINDEX);
      jQuery(this).attr('data-pointer-index', 'pointer-index' + RESULTEDINDEX);
    });

    jQuery(SLICKDOTSUL).detach().appendTo(MAPHOLDER);

    var POINTERDATAINDEX = jQuery(this).attr('data-pointer-index');
    var ATTRSTYLEPOSITION = jQuery(this).attr('style');
    var POINTERHTML = jQuery(this).html();
    
    jQuery(this).parents(TOPARENTS).find('.slick-dots').find('.' + POINTERDATAINDEX).attr('style', ATTRSTYLEPOSITION);
    jQuery(this).parents(TOPARENTS).find('.slick-dots').find('.' + POINTERDATAINDEX).append(POINTERHTML);

    jQuery(SLICKDOTSLI).addClass('pointer');

    

    
  });


  jQuery('.global-carousel').each(function(){
    jQuery(this).parents('.interactive-map-module.slider-functionality').find('.slick-dots li').each(function(){
      if (jQuery(this).hasClass('slick-active')) {
        jQuery(this).find('.trigger').addClass('active');
      }else{
        jQuery(this).find('.trigger').removeClass('active');
      }
    });
  });


  if ($(window).width() < $lowResDesktopEnds) {
    jQuery('.interactive-map-module.responsive-map-position-change-type-1').each(function(){
      var APPENDTOFRAME = jQuery(this).find('.global-card-content .inset-card-content');
      jQuery(this).find('.the-main-map').detach().appendTo(APPENDTOFRAME);
    });
  }

  if ($(window).width() < $xl) {
    jQuery('.interactive-map-module.responsive-map-position-change-type-2').each(function(){
      var APPENDTOFRAME = jQuery(this).find('.append-reponsive-map-frame-type-2');
      jQuery(this).find('.the-main-map').detach().prependTo(APPENDTOFRAME);
    });
  }
  


    

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

  
  // global-absolute-item-parent
  jQuery('.global-absolute-item-parent').each(function(){
    var HEIGHT = jQuery(this).find('.global-absolute-item').height();
    jQuery(this).css('padding-bottom', HEIGHT);
  });
  // global-absolute-item-parent


  
 // page anchoring
 jQuery(document).on('click', '.anchor-link', function (event) {
  event.preventDefault();

  jQuery('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - (HEADERHEIGHT + 20)
  }, 100);
});


// integration label changes
jQuery('.primary-color-btn, .outline-btn').addClass('site-btn');
jQuery('.banner-text p').addClass('group-btn');
jQuery('.half-height').parent('.full-height').addClass('mobile-full-height-remove');
jQuery('h1.special-lg').addClass('mb-0');
jQuery('.content-link').addClass('site-btn primary-color-btn down-arrow-btn anchor-link');
jQuery('.email-icon, .phone-icon').each(function(){
  jQuery(this).addClass('service-part global-iconic-link view-3 text-white element-gap element-gap-4');
  jQuery(this).find('> a').wrapInner('<span></span>');
  jQuery(this).find('> a').prepend('<i></i>');
});



// responsive placements banner mini slider
jQuery('.banner-mini-slider-module').each(function(){
  var PARENT = jQuery(this).parents('.page-banner-module');

  if ($(window).width() < $xl) {
    jQuery(this).detach().insertAfter(PARENT);
  }
});

// convert-to-mobile-slider-wrap
jQuery('.convert-to-mobile-slider-wrap').each(function(){
  var SLIDER = jQuery(this).find('.convert-to-mobile-slider');
  if ($(window).width() < $xl) {
    jQuery(SLIDER).removeClass('row default-row my-row jc-center');
    jQuery(SLIDER).find('.my-col').addClass('item');
    jQuery(SLIDER).slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
});

// switiching-column-tab-mobile
jQuery('.switiching-column-tab-mobile').each(function(){
var FIRSTCOLUMN = jQuery(this).find('.first-column');
var MIDCOLUMN = jQuery(this).find('.mid-column');
var LASTCOLUMN = jQuery(this).find('.last-column');

if ($(window).width() < $xl) {
  jQuery(this).find('.switch-column-berfore-last').detach().insertBefore(LASTCOLUMN);
}

});

// parallel-equal-height
jQuery('.parallel-equal-height').each(function(){
  jQuery(this).parent('.inset-card-content').addClass('full-height');
  jQuery(this).parents('.the-context').addClass('alignment-view-up');
});
// parallel-equal-height


// site-dropdown-module
// jQuery('.site-dropdown-module .hidden-check-radio').each(function(){
  

//   jQuery(this).click(function(){
//     if(jQuery(this).is(':checked')) {
//       var CHECKEDTEXT = jQuery(this).parent('.dropdown-item').find('span').text();
//       jQuery(this).parents('.site-dropdown-module').find('.dropdown-toggle').text(CHECKEDTEXT);
//    }
   
// });


   
// });
// site-dropdown-module

// forms
jQuery('.postcommentsform').each(function(){
  jQuery(this).addClass('site-form-view-layout-1');
  jQuery(this).find('.form-group').addClass('fieldwrap label-over-body-bg mb-5');
  jQuery(this).find('textarea').parents('.form-group').addClass('textarea-form-group');
});

// site-iconic-flex-form
jQuery(document).click(function(){

  jQuery('.site-iconic-flex-form .form-field.light-bg .dropdown-toggle').each(function(){
    if (jQuery(this).hasClass('show')) {
      jQuery(this).parent('.dropdown').addClass('show');
    }else{
      jQuery(this).parent('.dropdown').removeClass('show');
    }
  });
  
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



  jQuery('.convert-to-mobile-slider .slick-slide').matchHeight();


  if ($(window).width() >= $xl) {
    jQuery('.parallel-equal-height').each(function(){
      jQuery(this).parents('.has-full-height-adjusted-content').find('.parallel-equal-height').matchHeight({byRow: false});
    });
  };


  jQuery('.job-card-module').each(function(){
    jQuery(this).find('.job-context').matchHeight({byRow: false});
  });

  







var siteLoad = {}




siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

};   




jQuery(window).resize(function(){


});


// traingle-watermark-has
jQuery('.traingle-watermark-has:not(.left-positioned):not(.mask-size-2)').each(function(){
  var HEIGHT = jQuery(this).height();
  var WIDTH = jQuery(this).width();
  var CLONEMASKHEIGHT = jQuery(this).find('.the-mask-img img').height();
  var CLONEMASKWIDTH = jQuery(this).find('.the-mask-img img').width();
  jQuery(this).find('.mask-it').css('-webkit-mask-position-y', HEIGHT - CLONEMASKHEIGHT);
  jQuery(this).find('.mask-it').css('-webkit-mask-position-x', WIDTH - CLONEMASKWIDTH);
});

jQuery('.traingle-watermark-has.mask-size-2:not(.left-positioned)').each(function(){
  var HEIGHT = jQuery(this).height();
  var WIDTH = jQuery(this).width();
  var CLONEMASKHEIGHT = jQuery(this).find('.the-mask-img img').height();
  var CLONEMASKWIDTH = jQuery(this).find('.the-mask-img img').width();
  jQuery(this).find('.mask-it').css('-webkit-mask-position-y', 'bottom');
  jQuery(this).find('.mask-it').css('-webkit-mask-position-x', WIDTH - CLONEMASKWIDTH);
});

jQuery('.traingle-watermark-has.left-positioned').each(function(){
  var HEIGHT = jQuery(this).height();
  var WIDTH = jQuery(this).width();
  var CLONEMASKHEIGHT = jQuery(this).find('.the-mask-img img').height();
  var CLONEMASKWIDTH = jQuery(this).find('.the-mask-img img').width();
  jQuery(this).find('.mask-it').css('-webkit-mask-position-y', HEIGHT - CLONEMASKHEIGHT);
  jQuery(this).find('.mask-it').css('-webkit-mask-position-x', 0);
});

// cover-bg-content-module
jQuery('.cover-bg-content-module:not(.static-banner)').each(function(){
  var CONTEXTHEIGHT = jQuery(this).find('.the-context > .main-wrap').height();
  jQuery(this).css('min-height', CONTEXTHEIGHT);
});


// has-global-mask
jQuery('.has-global-mask').each(function(){
  var HIDDENMSUKHEIGHT = jQuery(this).find('.global-hidden-mask-img').height();
  jQuery(this).find('.adapt-mask-height').height(HIDDENMSUKHEIGHT);
});


// page-banner-module mobile view with mini slider
jQuery('.page-banner-module.mobile-view-with-mini-slider').each(function(){
  var HEIGHT = jQuery(this).height();
  var MINISLIDERHEIGHT = jQuery(this).parent().find('.banner-mini-slider-module').height();

  if ($(window).width() < $xl) {
    jQuery(this).height(HEIGHT - (MINISLIDERHEIGHT + 12));
  }
});

});

