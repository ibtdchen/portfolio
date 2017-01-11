(function($) {
  var body = $('body');
  
  $(document).ready(function() {
    menuButtons();
    scrollHeader();
    sliderMenu();
    sliderPress();
  });
  
  function menuButtons() {
    $('.menu-icon').click(function() {
      if (!body.hasClass('show-menu')) {
        $('.menu-icon').addClass('active');
        body.addClass('show-menu');
      }
      else {
        $('.menu-icon').removeClass('active');
        body.removeClass('show-menu');
      }
    });
    
    $('.sns-icon.msg').click(function() {
      if (!body.hasClass('show-sns')) {
        $('.sns-icon.msg').addClass('active');
        body.addClass('show-sns');
      }
      else {
        $('.sns-icon.msg').removeClass('active');
        body.removeClass('show-sns');
      }
    });
  }
  
  function scrollHeader() {
    var start = $('.page-header').offset().top;
    affixHeader(start);
    $(window).resize(function() {
      if(body.hasClass('shrinkHeader')) {
        body.removeClass('shrinkHeader');
        start = $('.page-header').offset().top;
        affixHeader(start);
      }
      else {
        body.addClass('shrinkHeader');
      }
    });
  }
  
  function affixHeader(start) {
    $(window).on('scroll', function() {
      var st = $(window).scrollTop();
      if (st > start) {
        body.addClass('shrinkHeader');
      }
      else {
        body.removeClass('shrinkHeader');
      }
    });
  }
  
  function sliderMenu() {
    if($('.menus .slider').length) {
      $('.menus .slider').slick({
        dots: true,
        infinite: true,
      });
    }
  }
  
  function sliderPress() {
    if($('.press .slider').length) {
      $('.press .slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
      });
    }
  }
  
  function smoothScroll(scrollElement) {
    var hashTagActive = '';
    if (scrollElement.length) {
      scrollElement.on('click', function(event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
          event.preventDefault();
          //calculate destination place
          var dest = 0;
          if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
          }
          else {
            dest = $(this.hash).offset().top;
          }
          //go to destination
          $('html, body').animate({
            scrollTop: dest
          }, 500, 'swing');
          hashTagActive = this.hash;
        }
      });
    }
  }
  
})(jQuery);