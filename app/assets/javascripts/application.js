// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.spin
//= require jquery.waypoints
//= require jquery.waypoints.sticky
//= require bowser
//= require_tree .

$(function() {
  var $win = $(window)
  var $banner = $('.banner')
  var $header = $banner.find('header')
  var $nav = $('nav')
  var $navPattern = $nav.find('.pattern')
  var menubg = new Trianglify({
      cellsize: 400,
      noiseIntensity: 0,
      x_gradient: ['#42c178', '#108eba', '#162e37']
  });
  var menupattern = menubg.generate($navPattern.width(), $navPattern.height());
  $navPattern.css('background-image', menupattern.dataUrl)

  var t = new Trianglify({
    noiseIntensity: 0,
    x_gradient: ['#42c178', '#108eba', '#162e37']
  });

  function redrawBanner() {
    var minHeight = Math.max($win.height(), $header.height()*1.8)
    $banner.css('min-height', minHeight+'px')
    var pattern = t.generate($banner.width(), $banner.height());
    $banner.css('background-image', pattern.dataUrl)
  };


  var menuOffset = 150;

  $nav.find('a').each(function() {
    var $a = $(this);
    var $item = $a.parent();
    var selector = $a.attr('href');
    var $section = $(selector)

    $section.waypoint(function(dir) {
      if (dir == 'down') {
        $item.removeClass('active')
      } else {
        $item.addClass('active')
      }
    }, {
      offset: function() {
        return -$(this).height()+menuOffset;
      }
    })

    $section.waypoint(function(dir) {
      if (dir == 'down') {
        $item.addClass('active')
      } else {
        $item.removeClass('active')
      }
    }, {
      offset: menuOffset
    })
  })

  $win.on('resize', function() {
    redrawBanner();
  });
  redrawBanner()

  $nav.waypoint('sticky');


  var $openSourceBrowserAlert = $('.open-browser');
  var $browserName = $openSourceBrowserAlert.find('.browser')
  if (bowser.firefox || bowser.chrome) {
    $openSourceBrowserAlert.removeClass('hidden')
    $browserName.text($browserName.data('firefox'))
    if (bowser.firefox) {
      $openSourceBrowserAlert.find('.firefox').removeClass('hidden')
    }
    if (bowser.chrome) {
      $openSourceBrowserAlert.find('.chrome').removeClass('hidden')
    }
  }
});
