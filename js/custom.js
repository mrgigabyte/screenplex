/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(document).ready(function() {


    
//  var owl = $("#owl-demo");
// 
//  owl.owlCarousel({
//      items : 10, //10 items above 1000px browser width
//      itemsDesktop : [1000,5], //5 items between 1000px and 901px
//      itemsDesktopSmall : [900,3], // betweem 900px and 601px
//      itemsTablet: [600,2], //2 items between 600 and 0
//      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
//  });
// 
//  // Custom Navigation Events
//  $(".next").click(function(){
//    owl.trigger('owl.next');
//  })
//  $(".prev").click(function(){
//    owl.trigger('owl.prev');
//  })
//  $(".play").click(function(){
//    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
//  })
//  $(".stop").click(function(){
//    owl.trigger('owl.stop');
//  })
// 
    $('.bxslider').bxSlider({
    auto: true,
    adaptiveHeight: true,
    slideWidth: 200,
    minSlides: 2,
    maxSlides: 5,
    slideMargin: 10
  });
    
    var noofSlides = 0;
    if($(window).width() <= 480){
  // do your stuff
        noofSlides = 1;
}
    else{
        noofSlides = 4;
    }
    
    $('.bxslider1').bxSlider({
    auto: true,
    slideWidth: 300,
    minSlides: noofSlides,
    maxSlides: noofSlides,
    slideMargin: 10
  });
    
});

$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>30){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
});

//$(document).ready(function() {
//    
//  $('.bxslider').bxSlider({
//    auto: true,
//    adaptiveHeight: true,
//    slideWidth: 200,
//    minSlides: 2,
//    maxSlides: 6,
//    slideMargin: 10
//  });})
    

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */
