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

 var SETBACK = jQuery(this).find('img').attr('src');
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

