// JavaScript Document
// Custom Jquery functions start at line

jQuery(document).ready(function ($) {

  // Topbar open / close & hover

  $('.top-strip,.top-bar').addClass('top-hide');

  $('a.op-cl.aopen').hover(function (e) {
      $('.top-hide').animate({opacity: 1});
    },
    function () {
      $('.top-hide').animate({opacity: 0.6});
      return false;
    });

  $('a.op-cl').click(function (e) {
    if ($('.top-strip,.top-bar').is('.top-hide')) {

      $('a.op-cl').removeClass("aopen").addClass("aclose");
      $('.top-strip,.top-bar').removeClass('top-hide').addClass('top-show');
      $('.top_inner').slideToggle('1000', 'linear', function () {
        //Google map top page setting
        $('#google_map_home').gMap({
          address: 'Pearl St, NY', zoom: 15, markers: [
            {'address': 'Pearl St, NY',}
          ]
        });
      });
    } else {
      $('.top_inner').slideToggle('1000', 'linear');
      $('a.op-cl').removeClass("aclose").addClass("aopen");
      $('.top-strip,.top-bar').removeClass('top-show').addClass('top-hide');
    }
  });

  // Filter SHow/Hide

  $('ul.filter-data li').find('a').hide();
  $('ul.filter-data li').find('a.selected').show();

  $.fn.filtershow = function (speed, easing, callback) {
    this.animate({
      marginLeft: 'show',
      marginRight: 'show',
      paddingLeft: 'show',
      paddingRight: 'show',
      width: 'show'
    }, speed, easing, callback);
  };
  $.fn.filterhide = function (speed, easing, callback) {
    this.animate({
      marginLeft: 'hide',
      marginRight: 'hide',
      paddingLeft: 'hide',
      paddingRight: 'hide',
      width: 'hide'
    }, speed, easing, callback);
  };

  $('ul.filter-data').on('mouseenter', function () {
    var $this = $(this);
    $this.find('li a').stop(true, true).filtershow(500);
  }).on('mouseleave', function () {
    $(this).find('li a').not('.selected').stop(true, true).filterhide(500);
  });

  // Hover item block

  $('.item-block-isotope').hover(function (e) {
      $(this).find('.hover-desc').animate(
        {bottom: '0px', opacity: 0.9},
        {
          easing: 'easeOutExpo',
          duration: 1000
        }
      );
      $(this).find('.symbol,.name,.info').animate(
        {
          opacity: 1
        });
    },
    function () {
      $(this).find('.hover-desc').animate(
        {bottom: '100px', opacity: 0},
        {
          easing: 'easeOutExpo',
          duration: 1000
        }
      );
      return false;
    });


  // Slider plugin

  $(".rslides1").responsiveSlides({
    //auto: false,
    nav: true,
    pause: true,
    pager: true,
    speed: 2500,
    timeout: 5000,
    //maxwidth: 540
  });

  $(".rslides3").responsiveSlides({
    //auto: false,
    nav: true,
    pause: true,
    pager: false,
    speed: 2500,
    timeout: 7000,
    //maxwidth: 540
    before: function () {

      $(".rslides3").parent().find('.caption').animate({bottom: '-550px', opacity: 1},
        {
          easing: 'easeOutExpo',
          duration: 1500
        }
      );
      $(".rslides3").parent().find('.caption').animate({bottom: '35px', opacity: 1},
        {
          easing: 'easeOutExpo',
          duration: 1500
        }
      );


    },
    after: function () {

    }
  });

  $(".rslides2").responsiveSlides({
    //auto: false,
    nav: true,
    pause: true,
    pager: true,
    speed: 2500,
    timeout: 7000,
    //maxwidth: 540
    before: function () {

      $(".rslides2").parents("#slider-color").removeClass();
      $(".rslides2").parents("#slider-color").addClass($('.rslides2 li.rslides1_on').attr("id"));
      $(".rslides2").parent().find('.caption').animate({bottom: '-550px', opacity: 1},
        {
          easing: 'easeOutExpo',
          duration: 1500
        }
      );
      $(".rslides2").parent().find('.caption').animate({bottom: '35px', opacity: 1},
        {
          easing: 'easeOutExpo',
          duration: 1500
        }
      );


    },
    after: function () {

    }
  });


  // Carousel plugin

  $('.testimonialswrap').carousel({
    slider: '#testimonials',
    slide: '.testimonials-slide',
    nextSlide: '.next-l',
    prevSlide: '.prev-l',
    addNav: false
  });


  setTimeout(function () {

      //Social icon hover

      $('ul.socicon li').fadeTo(300, 0.5);
      var width = 0;
      var sWidth = width += $('ul.top-w li').outerWidth(true);
      var n = $('ul.top-w li').length;

      $('ul.top-w li').hover(function () {
          $(this).fadeTo(300, 0.8);

        },
        function () {
          $(this).fadeTo(300, 0.5);

        });

      $('ul.top-w').hover(function () {
          $('ul.top-w').stop().animate({
              width: sWidth * n
            },
            {
              duration: 500,
              specialEasing: {
                width: 'swing'
              }
            });

        },
        function () {
          $('ul.top-w').stop().animate({
              width: '30px'
            },
            {
              duration: 500,
              specialEasing: {
                width: 'swing'
              }
            });

        });

    },
    1000);


  //Google map setting

  var $map = $('#google_map,#google_map2');
  if ($map.length) {

    $map.gMap({
      address: 'Pearl St, NY',
      zoom: 14,
      markers: [
        {'address': 'Pearl St, NY',}
      ]
    });

  }


  //Portfolio filter

  $('ul#portfolio-filter a').click(function () {

    $('ul#portfolio-filter a.currents').removeClass('currents');
    $(this).addClass('currents');

    var filterVal = $(this).text().toLowerCase().replace(' ', '-');

    if (filterVal == 'all') {
      $('#containment-portfolio li.hidden').show(1000).removeClass('hidden');
    } else {

      $('#containment-portfolio li').each(function () {
        if (!$(this).hasClass(filterVal)) {
          $(this).hide(1000).addClass('hidden');

        } else {
          $(this).show(1000).removeClass('hidden');

        }
      });
    }

    return false;
  });

  // Carousel images

  $('#Carousel1,#Carousel').carousel({
    interval: 2500
  });

  // Media element player
  // TODO: Add Sprout video API and change jquery to fit the needs.
  // TODO: Add SoundCloud API and change jquery to fit the needs.

  $('audio,video').mediaelementplayer({
    audioWidth: '100%',
    audioHeight: '30px',
    videoWidth: '100%',
    videoHeight: '100%'
  });

  $('#video-port').mediaelementplayer({
    audioWidth: '100%',
    audioHeight: '30px',
    videoWidth: '100%',
    defaultVideoHeight: 135
  });


  //prettyPhoto

  $("a[rel^='prettyPhoto']").prettyPhoto();

  //Portfolio item

  $('.item-block').hover(function () {
      $(this).css({
        background: '#f8f8f8'
      });
      $(this).find('.zoom').animate({
          left: "+=130px"
        },
        {
          duration: 300,
          specialEasing: {
            width: 'easeOutExpo'
          }
        });

      $(this).find('.link').animate({
          right: "+=130px"
        },
        {
          duration: 300,
          specialEasing: {
            width: 'easeOutExpo'
          }
        });

    },
    function () {
      $(this).css({
        background: 'none'
      });
      $(this).find('.zoom').animate({
          left: "-70px"
        },
        {
          duration: 300,
          specialEasing: {
            width: 'easeOutExpo'
          }
        });

      $(this).find('.link').animate({
          right: "-70px"
        },
        {
          duration: 300,
          specialEasing: {
            width: 'easeOutExpo'
          }
        });

      return false;
    });

  //Tweets setting


  function urlToLink(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp, "<a href='$1'>$1</a>");
  }

  function relTime(time_value) {
    time_value = time_value.replace(/(\+[0-9]{4}\s)/ig, "");
    var parsed_date = Date.parse(time_value);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var timeago = parseInt((relative_to.getTime() - parsed_date) / 1000);
    if (timeago < 60) return 'less than a minute ago';
    else if (timeago < 120) return 'about a minute ago';
    else if (timeago < (45 * 60)) return (parseInt(timeago / 60)).toString() + ' minutes ago';
    else if (timeago < (90 * 60)) return 'about an hour ago';
    else if (timeago < (24 * 60 * 60)) return 'about ' + (parseInt(timeago / 3600)).toString() + ' hours ago';
    else if (timeago < (48 * 60 * 60)) return '1 day ago';
    else return (parseInt(timeago / 86400)).toString() + ' days ago';
  }

  $('#tweet-list').hide();
  var user = 'envato'; // Set your twitter id
  var count = '3'; // How many feeds do you want. Recommended Max 10 Twitter Api

  $.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?include_rts=true&screen_name=' + user + '&count=' + count + '&callback=?',
    function (tweetdata) {
      var tl = $("#tweet-list");
      $.each(tweetdata,
        function (i, tweet) {
          tl.append("<li>&ldquo;" + urlToLink(tweet.text) + "&rdquo;&ndash; " + relTime(tweet.created_at) + "</li>");
        });
    });

  setTimeout(function () {
      $('.tweets p').hide();
      $('#tweet-list').show();

    },
    1000);

  // Search effect

  $('.navbar-search').hover(function () {
      $('.search-query').stop().animate({
          width: '150px'
        },
        {
          duration: 500,
          specialEasing: {
            width: 'swing'
          }
        });

    },
    function () {
      $('.search-query').stop().animate({
          width: '8px'
        },
        {
          duration: 500,
          specialEasing: {
            width: 'swing'
          }
        });

    });

  $("#header input#searchsubmit").mouseover(function () {
    $('#header #search form input#s').stop(false, true).animate({
      width: '152px',
      marginRight: '-6px',
      paddingLeft: '10px',
      paddingRight: '10px'
    }).focus();
  });
  $("#header #search").mouseleave(function () {
    value = '';
    $('#header #search form input#s').stop(false, true).animate({
      width: '3px',
      marginRight: '0',
      padding: '0'
    }).blur().val(value);
  });

  //Toggle

  $(".toggle-box").hide();
  $(".open-block").toggle(function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    });
  $(".open-block").click(function () {
    $(this).next(".toggle-box").slideToggle();
  });

  //Accordion

  $('.accordion-box').hide();
  $('.open-block-acc').click(function () {
    $(".open-block-acc").removeClass("active");
    $('.accordion-box').slideUp('normal');
    if ($(this).next().is(':hidden') == true) {
      $(this).next().slideDown('normal');
      $(this).addClass("active");
    }
  });

  //Message box

  $('.message-box').find('.closemsg').click(function () {
    $(this).parent('.message-box').slideUp(500);
  });

  // Mobi Navigation

  $("nav ul").find('li').hover(function () {
      $(this).children("ul").stop(true, true).fadeIn(300);
    },
    function () {
      $(this).children("ul").stop(true, true).fadeOut(200);
    });

  (function () {

    var $navResp = $('nav').children('ul'),
      optionsList = '<option value="" selected>MENU</option>';

    $navResp.find('li').each(function () {
      var $this = $(this),
        $anchor = $this.children('a'),
        depth = $this.parents('ul').length - 1,
        indent = '';

      if (depth) {
        while (depth > 0) {
          indent += '--';
          depth--;
        }
      }

      optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
    }).end().after('<select class="responsive">' + optionsList + '</select>');

    $('.responsive').on('change',
      function () {
        window.location = $(this).find("option:selected").val();

      });

  })();

  // Validator plugin

  $('#submit').formValidator({
    scope: '#form'
  });

  $('#submit').click(function () {
    $('input.error-input, textarea.error-input').delay(300).animate({
        marginLeft: 0
      },
      100).animate({
        marginLeft: 10
      },
      100).animate({
        marginLeft: 0
      },
      100).animate({
        marginLeft: 10
      },
      100).animate({
        marginLeft: 0
      },
      100);
  });

  // Form plugin


  var options = {

    beforeSubmit: function () {
      $('.sending').show();

    },
    success: function () {
      $('.sending').hide();
      $('#form').hide();
      $(".mess").show().html('<h3>Thanks !</h3><h3>Your message has been sent.</h3>'); // Change Your message post send
      $('.mess').delay(3500).fadeOut(function () {

        $('#form').clearForm();
        $('#form').delay(4000).show();

      });
    }
  };

  $('#form').submit(function () {
    $(this).ajaxSubmit(options);
    return false;
  });

});


$(window).load(function () {
  (function () {

    var $idajax = $('.portfolio-ajax > .item-block-ajax');
    index = $idajax.length - 2;

    start();

    function nextproject() {
      $(".rslides_ajax").removeClass('rslides active-slider');
      lastIndex = index;
      if (++index == $idajax.length) index = 0;
      $idajax.find('.img-ajax').fadeTo("slow", 0.5);
      $idajax.eq(index).addClass('active').find('.img-ajax').fadeTo("slow", 1);
      $idajax.eq(lastIndex).removeClass('active');
      $('.loader').fadeIn();
      $('#loaditem-ajax').css('visibility', 'hidden');
      var data = $idajax.eq(index).find('.item-display-ajax').html();
      $('#loaditem-ajax').html(data);
      $('#loaditem-ajax').find(".rslides_ajax").addClass('rslides active-slider');
      $(".active-slider").responsiveSlides({
        auto: true,
        nav: true,
        pause: true,
        pager: false,
        speed: 2500,
        timeout: 5000
      });
      $('#portfolioitem-ajax').slideUp(1000, function () {
        $('#loaditem-ajax').css('visibility', 'visible')
      }).delay(800).slideDown(1000, function () {
        $('.loader').fadeOut()
      });
      $("a[rel^='prettyPhoto']").prettyPhoto();
      return false;
    }


    function prevproject() {
      $(".rslides_ajax").removeClass('rslides active-slider');
      lastIndex = index;
      if (--index < 0) index = ($idajax.length - 1);
      $idajax.find('.img-ajax').fadeTo("slow", 0.5);
      $idajax.eq(index).addClass('active').find('.img-ajax').fadeTo("slow", 1);
      $idajax.eq(lastIndex).removeClass('active');
      $('.loader').fadeIn();
      $('#loaditem-ajax').css('visibility', 'hidden');
      var data = $idajax.eq(index).find('.item-display-ajax').html();
      $('#loaditem-ajax').html(data);
      $('#loaditem-ajax').find(".rslides_ajax").addClass('rslides active-slider');
      $(".active-slider").responsiveSlides({
        auto: true,
        nav: true,
        pause: true,
        pager: false,
        speed: 2500,
        timeout: 5000
      });
      $('#portfolioitem-ajax').slideUp(1000, function () {
        $('#loaditem-ajax').css('visibility', 'visible')
      }).delay(800).slideDown(1000, function () {
        $('.loader').fadeOut()
      });
      $("a[rel^='prettyPhoto']").prettyPhoto();
      return false;
    }

    function li_click() {

      if ($(this).hasClass('active')) {

      } else {

        $('html,body').animate({scrollTop: $("#pagehead").parent().offset().top}, 1000);
        $(".rslides_ajax").removeClass('rslides active-slider');
        lastIndex = index;
        index = $(this).index();
        $idajax.find('.img-ajax').fadeTo("slow", 0.5);
        $(this).addClass('active').find('.img-ajax').fadeTo("slow", 1);
        $idajax.eq(lastIndex).removeClass('active');
        $('.loader').fadeIn();
        $('.control-menu').fadeIn();
        $('#loaditem-ajax').css('visibility', 'hidden');
        var data = $idajax.eq(index).find('.item-display-ajax').html();
        $('#loaditem-ajax').html(data);
        $('#loaditem-ajax').find(".rslides_ajax").addClass('rslides active-slider');
        $(".active-slider").responsiveSlides({
          auto: true,
          nav: true,
          pause: true,
          pager: false,
          speed: 2500,
          timeout: 5000
        });
        $('#portfolioitem-ajax').slideUp(1000, function () {
          $('#loaditem-ajax').css('visibility', 'visible')
        }).slideDown(1000, function () {
          $('.loader').fadeOut()
        });
        $("a[rel^='prettyPhoto']").prettyPhoto();
      }
      return false;
    }

    function closeproject() {
      $(".rslides_ajax").removeClass('rslides active-slider');
      $('.control-menu').fadeOut();
      $('#loaditem-ajax').css('visibility', 'hidden');
      $('#portfolioitem-ajax').slideUp(1000);
      $idajax.removeClass('active').find('.img-ajax').fadeTo("slow", 1);
      return false;
    }

    function start() {
      $('#item-next').click(nextproject);
      $('#item-prev').click(prevproject);
      $('#item-close').click(closeproject);
      $idajax.click(li_click);
    }

  })();

});


$(function () {

  var $container = $('#container');

  $container.show().isotope('reLayout');

  function centerPortoImg() {
    $('.item-block-isotope').each(function () {
      var $this = $(this);
      if ($this.find('img').get(0) === undefined) {
        return;
      }
      var block_value = $this.width() / $this.height();
      var image_value = $this.find('img').get(0).width / $this.find('img').get(0).height;

      if (block_value <= image_value) {
        $this.find('img').css({
          'width': 'auto',
          'height': '100%',
          'top': 0
        }).css({'left': ~(($this.find('img').width() - $this.width()) / 2) + 1});
        $this.find('img').stop(true, true).fadeIn(1200);
      } else {
        $this.find('img').css({
          'width': '100%',
          'height': 'auto',
          'left': 0
        }).css({'top': ~(($this.find('img').height() - $this.height()) / 2) + 1});
        $this.find('img').stop(true, true).fadeIn(1200);
      }
    });
  }

  $(window).load(function () {
    centerPortoImg();
  });

  $('#change-small').find('a').click(function () {
    if ($(this).hasClass('change-select')) {
      return false;
    }
    $('#change-small').find('a').removeClass('change-select');
    $(this).addClass('change-select');
    if (!$('#change-small a:first-child').hasClass('change-select')) {
      $container.find('.item-block-isotope').addClass('item-block-small');
    } else {
      $container.find('.item-block-isotope').removeClass('item-block-small');
    }
    $container.find('img').fadeOut(500);
    $container
      .toggleClass('change-size')
      .isotope('reLayout');
    centerPortoImg();
    return false;
  });


  $container.find('.item-block-isotope').each(function () {
    var $this = $(this),
      number = parseInt($this.find('.number').text(), 10);
    if (number % 5 === 0) {
      $this.addClass('width3');
      $this.addClass('height2');
    }
    if (number % 6 === 0) {
      $this.addClass('height2');
    }
    if (number % 7 === 0) {
      $this.addClass('width2');
      $this.addClass('height3');
    }
    if (number % 8 === 0) {
      $this.addClass('width2');
      $this.addClass('height3');
    }
    if (number % 9 === 0) {
      $this.find('img').addClass('height3');
    }
  });

  $container.isotope({
    itemSelector: '.item-block-isotope',
    masonry: {
      columnWidth: 4
    }
  });


  var $optionSets = $('#filters .filter-data'),
    $optionLinks = $optionSets.find('a');

  $optionLinks.click(function () {
    var $this = $(this);
    // don't proceed if already selected
    if ($this.hasClass('selected')) {
      return false;
    }
    var $optionSet = $this.parents('.filter-data');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
      key = $optionSet.attr('data-option-key'),
      value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[key] = value;
    if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
      // changes in layout modes need extra logic
      changeLayoutMode($this, options)
    } else {
      // otherwise, apply new options
      $container.isotope(options);
    }

    return false;
  });


});
